package operations

import (
"openapi/pkg/models/shared")

type CreateImageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateImageRequestBodyImageTestsConfiguration struct {
    ImageTestsEnabled *bool `json:"imageTestsEnabled,omitempty"`
    TimeoutMinutes *int64 `json:"timeoutMinutes,omitempty"`
    
}

type CreateImageRequestBody struct {
    ClientToken string `json:"clientToken"`
    ContainerRecipeArn *string `json:"containerRecipeArn,omitempty"`
    DistributionConfigurationArn *string `json:"distributionConfigurationArn,omitempty"`
    EnhancedImageMetadataEnabled *bool `json:"enhancedImageMetadataEnabled,omitempty"`
    ImageRecipeArn *string `json:"imageRecipeArn,omitempty"`
    ImageTestsConfiguration *CreateImageRequestBodyImageTestsConfiguration `json:"imageTestsConfiguration,omitempty"`
    InfrastructureConfigurationArn string `json:"infrastructureConfigurationArn"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateImageRequest struct {
    Headers CreateImageHeaders 
    Request CreateImageRequestBody `request:"mediaType=application/json"`
    
}

type CreateImageResponse struct {
    CallRateLimitExceededException *interface{} 
    ClientException *interface{} 
    ContentType string 
    CreateImageResponse *shared.CreateImageResponse 
    ForbiddenException *interface{} 
    IdempotentParameterMismatchException *interface{} 
    InvalidRequestException *interface{} 
    ResourceInUseException *interface{} 
    ServiceException *interface{} 
    ServiceQuotaExceededException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

