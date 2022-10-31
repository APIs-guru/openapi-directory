package operations

import (
"openapi/pkg/models/shared")


type UpdateIdentityPoolXAmzTargetEnum string

const (
    UpdateIdentityPoolXAmzTargetEnumAwsCognitoIdentityServiceUpdateIdentityPool UpdateIdentityPoolXAmzTargetEnum = "AWSCognitoIdentityService.UpdateIdentityPool"
)


type UpdateIdentityPoolHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateIdentityPoolXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateIdentityPoolRequest struct {
    Headers UpdateIdentityPoolHeaders 
    Request shared.IdentityPool `request:"mediaType=application/json"`
    
}

type UpdateIdentityPoolResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    IdentityPool *shared.IdentityPool 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    LimitExceededException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceConflictException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

