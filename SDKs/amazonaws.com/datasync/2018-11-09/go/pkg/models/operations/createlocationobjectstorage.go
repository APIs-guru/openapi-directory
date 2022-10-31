package operations

import (
"openapi/pkg/models/shared")


type CreateLocationObjectStorageXAmzTargetEnum string

const (
    CreateLocationObjectStorageXAmzTargetEnumFmrsServiceCreateLocationObjectStorage CreateLocationObjectStorageXAmzTargetEnum = "FmrsService.CreateLocationObjectStorage"
)


type CreateLocationObjectStorageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateLocationObjectStorageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateLocationObjectStorageRequest struct {
    Headers CreateLocationObjectStorageHeaders 
    Request shared.CreateLocationObjectStorageRequest `request:"mediaType=application/json"`
    
}

type CreateLocationObjectStorageResponse struct {
    ContentType string 
    CreateLocationObjectStorageResponse *shared.CreateLocationObjectStorageResponse 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

