package operations

import (
"openapi/pkg/models/shared")

type CreateAPIMappingPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    
}

type CreateAPIMappingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateAPIMappingRequestBody struct {
    APIID string `json:"apiId"`
    APIMappingKey *string `json:"apiMappingKey,omitempty"`
    Stage string `json:"stage"`
    
}

type CreateAPIMappingRequest struct {
    PathParams CreateAPIMappingPathParams 
    Headers CreateAPIMappingHeaders 
    Request CreateAPIMappingRequestBody `request:"mediaType=application/json"`
    
}

type CreateAPIMappingResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateAPIMappingResponse *shared.CreateAPIMappingResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

