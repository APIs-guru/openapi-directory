package operations

import (
"openapi/pkg/models/shared")


type AdminCreateUserXAmzTargetEnum string

const (
    AdminCreateUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminCreateUser AdminCreateUserXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminCreateUser"
)


type AdminCreateUserHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AdminCreateUserXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AdminCreateUserRequest struct {
    Headers AdminCreateUserHeaders 
    Request shared.AdminCreateUserRequest `request:"mediaType=application/json"`
    
}

type AdminCreateUserResponse struct {
    AdminCreateUserResponse *shared.AdminCreateUserResponse 
    CodeDeliveryFailureException *interface{} 
    ContentType string 
    InternalErrorException *interface{} 
    InvalidLambdaResponseException *interface{} 
    InvalidParameterException *interface{} 
    InvalidPasswordException *interface{} 
    InvalidSmsRoleAccessPolicyException *interface{} 
    InvalidSmsRoleTrustRelationshipException *interface{} 
    NotAuthorizedException *interface{} 
    PreconditionNotMetException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnexpectedLambdaException *interface{} 
    UnsupportedUserStateException *interface{} 
    UserLambdaValidationException *interface{} 
    UserNotFoundException *interface{} 
    UsernameExistsException *interface{} 
    
}

