package operations

import (
"openapi/pkg/models/shared")


type DeletePermissionXAmzTargetEnum string

const (
    DeletePermissionXAmzTargetEnumAcmPrivateCaDeletePermission DeletePermissionXAmzTargetEnum = "ACMPrivateCA.DeletePermission"
)


type DeletePermissionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeletePermissionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeletePermissionRequest struct {
    Headers DeletePermissionHeaders 
    Request shared.DeletePermissionRequest `request:"mediaType=application/json"`
    
}

type DeletePermissionResponse struct {
    ContentType string 
    InvalidArnException *interface{} 
    InvalidStateException *interface{} 
    RequestFailedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

