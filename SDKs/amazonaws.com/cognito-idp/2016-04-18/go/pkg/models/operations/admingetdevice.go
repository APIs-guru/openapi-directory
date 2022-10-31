package operations

import (
"openapi/pkg/models/shared")


type AdminGetDeviceXAmzTargetEnum string

const (
    AdminGetDeviceXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminGetDevice AdminGetDeviceXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminGetDevice"
)


type AdminGetDeviceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AdminGetDeviceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AdminGetDeviceRequest struct {
    Headers AdminGetDeviceHeaders 
    Request shared.AdminGetDeviceRequest `request:"mediaType=application/json"`
    
}

type AdminGetDeviceResponse struct {
    AdminGetDeviceResponse *shared.AdminGetDeviceResponse 
    ContentType string 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    InvalidUserPoolConfigurationException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

