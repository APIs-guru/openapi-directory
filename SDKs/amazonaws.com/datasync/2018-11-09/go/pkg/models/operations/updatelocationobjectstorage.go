package operations

import (
"openapi/pkg/models/shared")


type UpdateLocationObjectStorageXAmzTargetEnum string

const (
    UpdateLocationObjectStorageXAmzTargetEnumFmrsServiceUpdateLocationObjectStorage UpdateLocationObjectStorageXAmzTargetEnum = "FmrsService.UpdateLocationObjectStorage"
)


type UpdateLocationObjectStorageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateLocationObjectStorageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateLocationObjectStorageRequest struct {
    Headers UpdateLocationObjectStorageHeaders 
    Request shared.UpdateLocationObjectStorageRequest `request:"mediaType=application/json"`
    
}

type UpdateLocationObjectStorageResponse struct {
    ContentType string 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    UpdateLocationObjectStorageResponse map[string]interface{} 
    
}

