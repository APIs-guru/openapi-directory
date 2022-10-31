package operations

import (
"openapi/pkg/models/shared")

type UpdateAPIKeyPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateAPIKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateAPIKeyRequestBody struct {
    Description *string `json:"description,omitempty"`
    Expires *int64 `json:"expires,omitempty"`
    
}

type UpdateAPIKeyRequest struct {
    PathParams UpdateAPIKeyPathParams 
    Headers UpdateAPIKeyHeaders 
    Request UpdateAPIKeyRequestBody `request:"mediaType=application/json"`
    
}

type UpdateAPIKeyResponse struct {
    APIKeyValidityOutOfBoundsException *interface{} 
    BadRequestException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    UpdateAPIKeyResponse *shared.UpdateAPIKeyResponse 
    
}

