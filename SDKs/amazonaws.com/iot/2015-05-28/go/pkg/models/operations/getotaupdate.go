package operations

import (
"openapi/pkg/models/shared")

type GetOtaUpdatePathParams struct {
    OtaUpdateID string `pathParam:"style=simple,explode=false,name=otaUpdateId"`
    
}

type GetOtaUpdateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetOtaUpdateRequest struct {
    PathParams GetOtaUpdatePathParams 
    Headers GetOtaUpdateHeaders 
    
}

type GetOtaUpdateResponse struct {
    ContentType string 
    GetOtaUpdateResponse *shared.GetOtaUpdateResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    
}

