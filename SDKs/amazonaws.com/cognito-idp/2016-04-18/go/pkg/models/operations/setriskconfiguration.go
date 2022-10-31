package operations

import (
"openapi/pkg/models/shared")


type SetRiskConfigurationXAmzTargetEnum string

const (
    SetRiskConfigurationXAmzTargetEnumAwsCognitoIdentityProviderServiceSetRiskConfiguration SetRiskConfigurationXAmzTargetEnum = "AWSCognitoIdentityProviderService.SetRiskConfiguration"
)


type SetRiskConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SetRiskConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SetRiskConfigurationRequest struct {
    Headers SetRiskConfigurationHeaders 
    Request shared.SetRiskConfigurationRequest `request:"mediaType=application/json"`
    
}

type SetRiskConfigurationResponse struct {
    CodeDeliveryFailureException *interface{} 
    ContentType string 
    InternalErrorException *interface{} 
    InvalidEmailRoleAccessPolicyException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    SetRiskConfigurationResponse *shared.SetRiskConfigurationResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UserPoolAddOnNotEnabledException *interface{} 
    
}

