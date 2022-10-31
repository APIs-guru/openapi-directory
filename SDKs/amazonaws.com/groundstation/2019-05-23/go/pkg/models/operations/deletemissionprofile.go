package operations

import (
"openapi/pkg/models/shared")

type DeleteMissionProfilePathParams struct {
    MissionProfileID string `pathParam:"style=simple,explode=false,name=missionProfileId"`
    
}

type DeleteMissionProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteMissionProfileRequest struct {
    PathParams DeleteMissionProfilePathParams 
    Headers DeleteMissionProfileHeaders 
    
}

type DeleteMissionProfileResponse struct {
    ContentType string 
    DependencyException *interface{} 
    InvalidParameterException *interface{} 
    MissionProfileIDResponse *shared.MissionProfileIDResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

