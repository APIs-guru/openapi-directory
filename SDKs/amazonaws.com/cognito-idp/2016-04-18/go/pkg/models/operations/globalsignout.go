package operations

import (
"openapi/pkg/models/shared")


type GlobalSignOutXAmzTargetEnum string

const (
    GlobalSignOutXAmzTargetEnumAwsCognitoIdentityProviderServiceGlobalSignOut GlobalSignOutXAmzTargetEnum = "AWSCognitoIdentityProviderService.GlobalSignOut"
)


type GlobalSignOutHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GlobalSignOutXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GlobalSignOutRequest struct {
    Headers GlobalSignOutHeaders 
    Request shared.GlobalSignOutRequest `request:"mediaType=application/json"`
    
}

type GlobalSignOutResponse struct {
    ContentType string 
    GlobalSignOutResponse map[string]interface{} 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    PasswordResetRequiredException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UserNotConfirmedException *interface{} 
    
}

