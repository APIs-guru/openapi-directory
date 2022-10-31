package operations

import (
"openapi/pkg/models/shared")


type GetIDXAmzTargetEnum string

const (
    GetIDXAmzTargetEnumAwsCognitoIdentityServiceGetID GetIDXAmzTargetEnum = "AWSCognitoIdentityService.GetId"
)


type GetIDHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetIDXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetIDRequest struct {
    Headers GetIDHeaders 
    Request shared.GetIDInput `request:"mediaType=application/json"`
    
}

type GetIDResponse struct {
    ContentType string 
    ExternalServiceException *interface{} 
    GetIDResponse *shared.GetIDResponse 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    LimitExceededException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceConflictException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

