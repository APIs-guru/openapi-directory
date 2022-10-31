package operations

import (
"openapi/pkg/models/shared")


type AdminDeleteUserXAmzTargetEnum string

const (
    AdminDeleteUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminDeleteUser AdminDeleteUserXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminDeleteUser"
)


type AdminDeleteUserHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AdminDeleteUserXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AdminDeleteUserRequest struct {
    Headers AdminDeleteUserHeaders 
    Request shared.AdminDeleteUserRequest `request:"mediaType=application/json"`
    
}

type AdminDeleteUserResponse struct {
    ContentType string 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UserNotFoundException *interface{} 
    
}

