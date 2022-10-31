package operations

import (
"openapi/pkg/models/shared")


type CreateSecurityConfigurationXAmzTargetEnum string

const (
    CreateSecurityConfigurationXAmzTargetEnumAwsGlueCreateSecurityConfiguration CreateSecurityConfigurationXAmzTargetEnum = "AWSGlue.CreateSecurityConfiguration"
)


type CreateSecurityConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateSecurityConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateSecurityConfigurationRequest struct {
    Headers CreateSecurityConfigurationHeaders 
    Request shared.CreateSecurityConfigurationRequest `request:"mediaType=application/json"`
    
}

type CreateSecurityConfigurationResponse struct {
    AlreadyExistsException *interface{} 
    ContentType string 
    CreateSecurityConfigurationResponse *shared.CreateSecurityConfigurationResponse 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    ResourceNumberLimitExceededException *interface{} 
    StatusCode int64 
    
}

