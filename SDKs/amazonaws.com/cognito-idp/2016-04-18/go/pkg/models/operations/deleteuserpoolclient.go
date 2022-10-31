package operations

import (
"openapi/pkg/models/shared")


type DeleteUserPoolClientXAmzTargetEnum string

const (
    DeleteUserPoolClientXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteUserPoolClient DeleteUserPoolClientXAmzTargetEnum = "AWSCognitoIdentityProviderService.DeleteUserPoolClient"
)


type DeleteUserPoolClientHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteUserPoolClientXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteUserPoolClientRequest struct {
    Headers DeleteUserPoolClientHeaders 
    Request shared.DeleteUserPoolClientRequest `request:"mediaType=application/json"`
    
}

type DeleteUserPoolClientResponse struct {
    ContentType string 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

