package operations

import (
"openapi/pkg/models/shared")


type AdminDeleteUserAttributesXAmzTargetEnum string

const (
    AdminDeleteUserAttributesXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminDeleteUserAttributes AdminDeleteUserAttributesXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminDeleteUserAttributes"
)


type AdminDeleteUserAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AdminDeleteUserAttributesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AdminDeleteUserAttributesRequest struct {
    Headers AdminDeleteUserAttributesHeaders 
    Request shared.AdminDeleteUserAttributesRequest `request:"mediaType=application/json"`
    
}

type AdminDeleteUserAttributesResponse struct {
    AdminDeleteUserAttributesResponse map[string]interface{} 
    ContentType string 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UserNotFoundException *interface{} 
    
}

