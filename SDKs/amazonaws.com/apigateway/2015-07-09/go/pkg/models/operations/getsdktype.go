package operations

import (
"openapi/pkg/models/shared")

type GetSdkTypePathParams struct {
    SdktypeID string `pathParam:"style=simple,explode=false,name=sdktype_id"`
    
}

type GetSdkTypeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetSdkTypeRequest struct {
    PathParams GetSdkTypePathParams 
    Headers GetSdkTypeHeaders 
    
}

type GetSdkTypeResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    NotFoundException *interface{} 
    SdkType *shared.SdkType 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

