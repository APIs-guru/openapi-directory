package operations

import (
"openapi/pkg/models/shared")

type CreateDistributionConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateDistributionConfigurationRequestBody struct {
    ClientToken string `json:"clientToken"`
    Description *string `json:"description,omitempty"`
    Distributions []shared.Distribution `json:"distributions"`
    Name string `json:"name"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateDistributionConfigurationRequest struct {
    Headers CreateDistributionConfigurationHeaders 
    Request CreateDistributionConfigurationRequestBody `request:"mediaType=application/json"`
    
}

type CreateDistributionConfigurationResponse struct {
    CallRateLimitExceededException *interface{} 
    ClientException *interface{} 
    ContentType string 
    CreateDistributionConfigurationResponse *shared.CreateDistributionConfigurationResponse 
    ForbiddenException *interface{} 
    IdempotentParameterMismatchException *interface{} 
    InvalidParameterCombinationException *interface{} 
    InvalidRequestException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceInUseException *interface{} 
    ServiceException *interface{} 
    ServiceQuotaExceededException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

