package operations

import (
"openapi/pkg/models/shared")


type DeleteUserAttributesXAmzTargetEnum string

const (
    DeleteUserAttributesXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteUserAttributes DeleteUserAttributesXAmzTargetEnum = "AWSCognitoIdentityProviderService.DeleteUserAttributes"
)


type DeleteUserAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteUserAttributesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteUserAttributesRequest struct {
    Headers DeleteUserAttributesHeaders 
    Request shared.DeleteUserAttributesRequest `request:"mediaType=application/json"`
    
}

type DeleteUserAttributesResponse struct {
    ContentType string 
    DeleteUserAttributesResponse map[string]interface{} 
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

