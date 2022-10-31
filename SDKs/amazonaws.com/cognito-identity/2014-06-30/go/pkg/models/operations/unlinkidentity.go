package operations

import (
"openapi/pkg/models/shared")


type UnlinkIdentityXAmzTargetEnum string

const (
    UnlinkIdentityXAmzTargetEnumAwsCognitoIdentityServiceUnlinkIdentity UnlinkIdentityXAmzTargetEnum = "AWSCognitoIdentityService.UnlinkIdentity"
)


type UnlinkIdentityHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UnlinkIdentityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UnlinkIdentityRequest struct {
    Headers UnlinkIdentityHeaders 
    Request shared.UnlinkIdentityInput `request:"mediaType=application/json"`
    
}

type UnlinkIdentityResponse struct {
    ContentType string 
    ExternalServiceException *interface{} 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceConflictException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

