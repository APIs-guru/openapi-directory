package operations

import (
"openapi/pkg/models/shared")

type UpdateInfrastructureConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateInfrastructureConfigurationRequestBodyLogging struct {
    S3Logs *shared.S3Logs `json:"s3Logs,omitempty"`
    
}

type UpdateInfrastructureConfigurationRequestBody struct {
    ClientToken string `json:"clientToken"`
    Description *string `json:"description,omitempty"`
    InfrastructureConfigurationArn string `json:"infrastructureConfigurationArn"`
    InstanceProfileName string `json:"instanceProfileName"`
    InstanceTypes []string `json:"instanceTypes,omitempty"`
    KeyPair *string `json:"keyPair,omitempty"`
    Logging *UpdateInfrastructureConfigurationRequestBodyLogging `json:"logging,omitempty"`
    ResourceTags map[string]string `json:"resourceTags,omitempty"`
    SecurityGroupIds []string `json:"securityGroupIds,omitempty"`
    SnsTopicArn *string `json:"snsTopicArn,omitempty"`
    SubnetID *string `json:"subnetId,omitempty"`
    TerminateInstanceOnFailure *bool `json:"terminateInstanceOnFailure,omitempty"`
    
}

type UpdateInfrastructureConfigurationRequest struct {
    Headers UpdateInfrastructureConfigurationHeaders 
    Request UpdateInfrastructureConfigurationRequestBody `request:"mediaType=application/json"`
    
}

type UpdateInfrastructureConfigurationResponse struct {
    CallRateLimitExceededException *interface{} 
    ClientException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    IdempotentParameterMismatchException *interface{} 
    InvalidRequestException *interface{} 
    ResourceInUseException *interface{} 
    ServiceException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    UpdateInfrastructureConfigurationResponse *shared.UpdateInfrastructureConfigurationResponse 
    
}

