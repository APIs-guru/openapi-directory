package operations

import (
"openapi/pkg/models/shared")


type UpdateUploadXAmzTargetEnum string

const (
    UpdateUploadXAmzTargetEnumDeviceFarm20150623UpdateUpload UpdateUploadXAmzTargetEnum = "DeviceFarm_20150623.UpdateUpload"
)


type UpdateUploadHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateUploadXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateUploadRequest struct {
    Headers UpdateUploadHeaders 
    Request shared.UpdateUploadRequest `request:"mediaType=application/json"`
    
}

type UpdateUploadResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    UpdateUploadResult *shared.UpdateUploadResult 
    
}

