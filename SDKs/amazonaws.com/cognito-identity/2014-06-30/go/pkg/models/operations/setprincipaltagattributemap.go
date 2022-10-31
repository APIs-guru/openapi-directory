package operations

import (
"openapi/pkg/models/shared")


type SetPrincipalTagAttributeMapXAmzTargetEnum string

const (
    SetPrincipalTagAttributeMapXAmzTargetEnumAwsCognitoIdentityServiceSetPrincipalTagAttributeMap SetPrincipalTagAttributeMapXAmzTargetEnum = "AWSCognitoIdentityService.SetPrincipalTagAttributeMap"
)


type SetPrincipalTagAttributeMapHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SetPrincipalTagAttributeMapXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SetPrincipalTagAttributeMapRequest struct {
    Headers SetPrincipalTagAttributeMapHeaders 
    Request shared.SetPrincipalTagAttributeMapInput `request:"mediaType=application/json"`
    
}

type SetPrincipalTagAttributeMapResponse struct {
    ContentType string 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    SetPrincipalTagAttributeMapResponse *shared.SetPrincipalTagAttributeMapResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

