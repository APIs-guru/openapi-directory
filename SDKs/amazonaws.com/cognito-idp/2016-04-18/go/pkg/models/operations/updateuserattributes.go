package operations

import (
"openapi/pkg/models/shared")


type UpdateUserAttributesXAmzTargetEnum string

const (
    UpdateUserAttributesXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateUserAttributes UpdateUserAttributesXAmzTargetEnum = "AWSCognitoIdentityProviderService.UpdateUserAttributes"
)


type UpdateUserAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateUserAttributesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateUserAttributesRequest struct {
    Headers UpdateUserAttributesHeaders 
    Request shared.UpdateUserAttributesRequest `request:"mediaType=application/json"`
    
}

type UpdateUserAttributesResponse struct {
    AliasExistsException *interface{} 
    CodeDeliveryFailureException *interface{} 
    CodeMismatchException *interface{} 
    ContentType string 
    ExpiredCodeException *interface{} 
    InternalErrorException *interface{} 
    InvalidEmailRoleAccessPolicyException *interface{} 
    InvalidLambdaResponseException *interface{} 
    InvalidParameterException *interface{} 
    InvalidSmsRoleAccessPolicyException *interface{} 
    InvalidSmsRoleTrustRelationshipException *interface{} 
    NotAuthorizedException *interface{} 
    PasswordResetRequiredException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnexpectedLambdaException *interface{} 
    UpdateUserAttributesResponse *shared.UpdateUserAttributesResponse 
    UserLambdaValidationException *interface{} 
    UserNotConfirmedException *interface{} 
    UserNotFoundException *interface{} 
    
}

