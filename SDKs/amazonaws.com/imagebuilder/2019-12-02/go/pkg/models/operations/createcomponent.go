package operations

import (
"openapi/pkg/models/shared")

type CreateComponentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type CreateComponentRequestBodyPlatformEnum string

const (
    CreateComponentRequestBodyPlatformEnumWindows CreateComponentRequestBodyPlatformEnum = "Windows"
CreateComponentRequestBodyPlatformEnumLinux CreateComponentRequestBodyPlatformEnum = "Linux"
)


type CreateComponentRequestBody struct {
    ChangeDescription *string `json:"changeDescription,omitempty"`
    ClientToken string `json:"clientToken"`
    Data *string `json:"data,omitempty"`
    Description *string `json:"description,omitempty"`
    KmsKeyID *string `json:"kmsKeyId,omitempty"`
    Name string `json:"name"`
    Platform CreateComponentRequestBodyPlatformEnum `json:"platform"`
    SemanticVersion string `json:"semanticVersion"`
    SupportedOsVersions []string `json:"supportedOsVersions,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type CreateComponentRequest struct {
    Headers CreateComponentHeaders 
    Request CreateComponentRequestBody `request:"mediaType=application/json"`
    
}

type CreateComponentResponse struct {
    CallRateLimitExceededException *interface{} 
    ClientException *interface{} 
    ContentType string 
    CreateComponentResponse *shared.CreateComponentResponse 
    ForbiddenException *interface{} 
    IdempotentParameterMismatchException *interface{} 
    InvalidParameterCombinationException *interface{} 
    InvalidRequestException *interface{} 
    InvalidVersionNumberException *interface{} 
    ResourceInUseException *interface{} 
    ServiceException *interface{} 
    ServiceQuotaExceededException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

