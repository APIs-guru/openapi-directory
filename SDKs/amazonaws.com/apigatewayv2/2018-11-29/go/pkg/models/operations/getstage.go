package operations

import (
"openapi/pkg/models/shared")

type GetStagePathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    StageName string `pathParam:"style=simple,explode=false,name=stageName"`
    
}

type GetStageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetStageRequest struct {
    PathParams GetStagePathParams 
    Headers GetStageHeaders 
    
}

type GetStageResponse struct {
    ContentType string 
    GetStageResponse *shared.GetStageResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

