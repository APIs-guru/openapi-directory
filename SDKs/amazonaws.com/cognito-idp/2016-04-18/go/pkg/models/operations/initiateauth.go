package operations

import (
"openapi/pkg/models/shared")


type InitiateAuthXAmzTargetEnum string

const (
    InitiateAuthXAmzTargetEnumAwsCognitoIdentityProviderServiceInitiateAuth InitiateAuthXAmzTargetEnum = "AWSCognitoIdentityProviderService.InitiateAuth"
)


type InitiateAuthHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget InitiateAuthXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type InitiateAuthRequest struct {
    Headers InitiateAuthHeaders 
    Request shared.InitiateAuthRequest `request:"mediaType=application/json"`
    
}

type InitiateAuthResponse struct {
    ContentType string 
    InitiateAuthResponse *shared.InitiateAuthResponse 
    InternalErrorException *interface{} 
    InvalidLambdaResponseException *interface{} 
    InvalidParameterException *interface{} 
    InvalidSmsRoleAccessPolicyException *interface{} 
    InvalidSmsRoleTrustRelationshipException *interface{} 
    InvalidUserPoolConfigurationException *interface{} 
    NotAuthorizedException *interface{} 
    PasswordResetRequiredException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnexpectedLambdaException *interface{} 
    UserLambdaValidationException *interface{} 
    UserNotConfirmedException *interface{} 
    UserNotFoundException *interface{} 
    
}

