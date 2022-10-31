package operations

import (
"openapi/pkg/models/shared")

type GetMissionProfilePathParams struct {
    MissionProfileID string `pathParam:"style=simple,explode=false,name=missionProfileId"`
    
}

type GetMissionProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetMissionProfileRequest struct {
    PathParams GetMissionProfilePathParams 
    Headers GetMissionProfileHeaders 
    
}

type GetMissionProfileResponse struct {
    ContentType string 
    DependencyException *interface{} 
    GetMissionProfileResponse *shared.GetMissionProfileResponse 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

