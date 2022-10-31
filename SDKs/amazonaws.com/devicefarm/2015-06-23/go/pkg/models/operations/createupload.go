package operations

import (
"openapi/pkg/models/shared")


type CreateUploadXAmzTargetEnum string

const (
    CreateUploadXAmzTargetEnumDeviceFarm20150623CreateUpload CreateUploadXAmzTargetEnum = "DeviceFarm_20150623.CreateUpload"
)


type CreateUploadHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateUploadXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateUploadRequest struct {
    Headers CreateUploadHeaders 
    Request shared.CreateUploadRequest `request:"mediaType=application/json"`
    
}

type CreateUploadResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    CreateUploadResult *shared.CreateUploadResult 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    
}

