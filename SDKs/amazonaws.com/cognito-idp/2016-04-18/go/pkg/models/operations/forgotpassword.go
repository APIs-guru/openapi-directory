package operations

import (
"openapi/pkg/models/shared")


type ForgotPasswordXAmzTargetEnum string

const (
    ForgotPasswordXAmzTargetEnumAwsCognitoIdentityProviderServiceForgotPassword ForgotPasswordXAmzTargetEnum = "AWSCognitoIdentityProviderService.ForgotPassword"
)


type ForgotPasswordHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ForgotPasswordXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ForgotPasswordRequest struct {
    Headers ForgotPasswordHeaders 
    Request shared.ForgotPasswordRequest `request:"mediaType=application/json"`
    
}

type ForgotPasswordResponse struct {
    CodeDeliveryFailureException *interface{} 
    ContentType string 
    ForgotPasswordResponse *shared.ForgotPasswordResponse 
    InternalErrorException *interface{} 
    InvalidEmailRoleAccessPolicyException *interface{} 
    InvalidLambdaResponseException *interface{} 
    InvalidParameterException *interface{} 
    InvalidSmsRoleAccessPolicyException *interface{} 
    InvalidSmsRoleTrustRelationshipException *interface{} 
    LimitExceededException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnexpectedLambdaException *interface{} 
    UserLambdaValidationException *interface{} 
    UserNotConfirmedException *interface{} 
    UserNotFoundException *interface{} 
    
}

