package operations

import (
"openapi/pkg/models/shared")


type AdminListDevicesXAmzTargetEnum string

const (
    AdminListDevicesXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminListDevices AdminListDevicesXAmzTargetEnum = "AWSCognitoIdentityProviderService.AdminListDevices"
)


type AdminListDevicesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AdminListDevicesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AdminListDevicesRequest struct {
    Headers AdminListDevicesHeaders 
    Request shared.AdminListDevicesRequest `request:"mediaType=application/json"`
    
}

type AdminListDevicesResponse struct {
    AdminListDevicesResponse *shared.AdminListDevicesResponse 
    ContentType string 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    InvalidUserPoolConfigurationException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

