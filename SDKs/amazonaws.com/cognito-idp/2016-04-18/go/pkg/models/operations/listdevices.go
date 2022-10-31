package operations

import (
"openapi/pkg/models/shared")


type ListDevicesXAmzTargetEnum string

const (
    ListDevicesXAmzTargetEnumAwsCognitoIdentityProviderServiceListDevices ListDevicesXAmzTargetEnum = "AWSCognitoIdentityProviderService.ListDevices"
)


type ListDevicesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListDevicesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListDevicesRequest struct {
    Headers ListDevicesHeaders 
    Request shared.ListDevicesRequest `request:"mediaType=application/json"`
    
}

type ListDevicesResponse struct {
    ContentType string 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    InvalidUserPoolConfigurationException *interface{} 
    ListDevicesResponse *shared.ListDevicesResponse 
    NotAuthorizedException *interface{} 
    PasswordResetRequiredException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UserNotConfirmedException *interface{} 
    UserNotFoundException *interface{} 
    
}

