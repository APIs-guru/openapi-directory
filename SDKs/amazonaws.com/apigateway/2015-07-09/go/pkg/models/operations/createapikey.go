package operations

import (
"openapi/pkg/models/shared")

type CreateAPIKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateAPIKeyRequestBody struct {
    CustomerID *string `json:"customerId,omitempty"`
    Description *string `json:"description,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    GenerateDistinctID *bool `json:"generateDistinctId,omitempty"`
    Name *string `json:"name,omitempty"`
    StageKeys []shared.StageKey `json:"stageKeys,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type CreateAPIKeyRequest struct {
    Headers CreateAPIKeyHeaders 
    Request CreateAPIKeyRequestBody `request:"mediaType=application/json"`
    
}

type CreateAPIKeyResponse struct {
    APIKey *shared.APIKey 
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

