package operations

import (
"openapi/pkg/models/shared")


type GetUserAttributeVerificationCodeXAmzTargetEnum string

const (
    GetUserAttributeVerificationCodeXAmzTargetEnumAwsCognitoIdentityProviderServiceGetUserAttributeVerificationCode GetUserAttributeVerificationCodeXAmzTargetEnum = "AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode"
)


type GetUserAttributeVerificationCodeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetUserAttributeVerificationCodeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetUserAttributeVerificationCodeRequest struct {
    Headers GetUserAttributeVerificationCodeHeaders 
    Request shared.GetUserAttributeVerificationCodeRequest `request:"mediaType=application/json"`
    
}

type GetUserAttributeVerificationCodeResponse struct {
    CodeDeliveryFailureException *interface{} 
    ContentType string 
    GetUserAttributeVerificationCodeResponse *shared.GetUserAttributeVerificationCodeResponse 
    InternalErrorException *interface{} 
    InvalidEmailRoleAccessPolicyException *interface{} 
    InvalidLambdaResponseException *interface{} 
    InvalidParameterException *interface{} 
    InvalidSmsRoleAccessPolicyException *interface{} 
    InvalidSmsRoleTrustRelationshipException *interface{} 
    LimitExceededException *interface{} 
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

