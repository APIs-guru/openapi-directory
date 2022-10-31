package operations

import (
"openapi/pkg/models/shared")


type GetUserXAmzTargetEnum string

const (
    GetUserXAmzTargetEnumAwsCognitoIdentityProviderServiceGetUser GetUserXAmzTargetEnum = "AWSCognitoIdentityProviderService.GetUser"
)


type GetUserHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetUserXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetUserRequest struct {
    Headers GetUserHeaders 
    Request shared.GetUserRequest `request:"mediaType=application/json"`
    
}

type GetUserResponse struct {
    ContentType string 
    GetUserResponse *shared.GetUserResponse 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    PasswordResetRequiredException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UserNotConfirmedException *interface{} 
    UserNotFoundException *interface{} 
    
}

