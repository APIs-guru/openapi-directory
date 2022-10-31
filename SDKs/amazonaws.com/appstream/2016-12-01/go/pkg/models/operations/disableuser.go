package operations

import (
"openapi/pkg/models/shared")


type DisableUserXAmzTargetEnum string

const (
    DisableUserXAmzTargetEnumPhotonAdminProxyServiceDisableUser DisableUserXAmzTargetEnum = "PhotonAdminProxyService.DisableUser"
)


type DisableUserHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisableUserXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisableUserRequest struct {
    Headers DisableUserHeaders 
    Request shared.DisableUserRequest `request:"mediaType=application/json"`
    
}

type DisableUserResponse struct {
    ContentType string 
    DisableUserResult map[string]interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

