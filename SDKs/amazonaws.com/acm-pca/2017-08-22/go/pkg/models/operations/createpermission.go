package operations

import (
"openapi/pkg/models/shared")


type CreatePermissionXAmzTargetEnum string

const (
    CreatePermissionXAmzTargetEnumAcmPrivateCaCreatePermission CreatePermissionXAmzTargetEnum = "ACMPrivateCA.CreatePermission"
)


type CreatePermissionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreatePermissionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreatePermissionRequest struct {
    Headers CreatePermissionHeaders 
    Request shared.CreatePermissionRequest `request:"mediaType=application/json"`
    
}

type CreatePermissionResponse struct {
    ContentType string 
    InvalidArnException *interface{} 
    InvalidStateException *interface{} 
    LimitExceededException *interface{} 
    PermissionAlreadyExistsException *interface{} 
    RequestFailedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

