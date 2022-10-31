package operations

import (
"openapi/pkg/models/shared")


type UnlinkDeveloperIdentityXAmzTargetEnum string

const (
    UnlinkDeveloperIdentityXAmzTargetEnumAwsCognitoIdentityServiceUnlinkDeveloperIdentity UnlinkDeveloperIdentityXAmzTargetEnum = "AWSCognitoIdentityService.UnlinkDeveloperIdentity"
)


type UnlinkDeveloperIdentityHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UnlinkDeveloperIdentityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UnlinkDeveloperIdentityRequest struct {
    Headers UnlinkDeveloperIdentityHeaders 
    Request shared.UnlinkDeveloperIdentityInput `request:"mediaType=application/json"`
    
}

type UnlinkDeveloperIdentityResponse struct {
    ContentType string 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceConflictException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

