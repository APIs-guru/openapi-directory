package operations

import (
"time"
"openapi/pkg/models/shared")

type ReserveContactHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ReserveContactRequestBody struct {
    EndTime time.Time `json:"endTime"`
    GroundStation string `json:"groundStation"`
    MissionProfileArn string `json:"missionProfileArn"`
    SatelliteArn string `json:"satelliteArn"`
    StartTime time.Time `json:"startTime"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type ReserveContactRequest struct {
    Headers ReserveContactHeaders 
    Request ReserveContactRequestBody `request:"mediaType=application/json"`
    
}

type ReserveContactResponse struct {
    ContactIDResponse *shared.ContactIDResponse 
    ContentType string 
    DependencyException *interface{} 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

