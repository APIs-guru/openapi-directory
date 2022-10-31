package operations

import (
"openapi/pkg/models/shared")


type DeleteIdentityPoolXAmzTargetEnum string

const (
    DeleteIdentityPoolXAmzTargetEnumAwsCognitoIdentityServiceDeleteIdentityPool DeleteIdentityPoolXAmzTargetEnum = "AWSCognitoIdentityService.DeleteIdentityPool"
)


type DeleteIdentityPoolHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteIdentityPoolXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteIdentityPoolRequest struct {
    Headers DeleteIdentityPoolHeaders 
    Request shared.DeleteIdentityPoolInput `request:"mediaType=application/json"`
    
}

type DeleteIdentityPoolResponse struct {
    ContentType string 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

