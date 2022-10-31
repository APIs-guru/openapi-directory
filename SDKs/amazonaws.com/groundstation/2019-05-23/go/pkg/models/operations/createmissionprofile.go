package operations

import (
"openapi/pkg/models/shared")

type CreateMissionProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateMissionProfileRequestBody struct {
    ContactPostPassDurationSeconds *int64 `json:"contactPostPassDurationSeconds,omitempty"`
    ContactPrePassDurationSeconds *int64 `json:"contactPrePassDurationSeconds,omitempty"`
    DataflowEdges [][]string `json:"dataflowEdges"`
    MinimumViableContactDurationSeconds int64 `json:"minimumViableContactDurationSeconds"`
    Name string `json:"name"`
    Tags map[string]string `json:"tags,omitempty"`
    TrackingConfigArn string `json:"trackingConfigArn"`
    
}

type CreateMissionProfileRequest struct {
    Headers CreateMissionProfileHeaders 
    Request CreateMissionProfileRequestBody `request:"mediaType=application/json"`
    
}

type CreateMissionProfileResponse struct {
    ContentType string 
    DependencyException *interface{} 
    InvalidParameterException *interface{} 
    MissionProfileIDResponse *shared.MissionProfileIDResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

