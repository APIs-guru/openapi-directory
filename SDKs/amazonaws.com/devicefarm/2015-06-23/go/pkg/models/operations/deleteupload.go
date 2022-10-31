package operations

import (
"openapi/pkg/models/shared")


type DeleteUploadXAmzTargetEnum string

const (
    DeleteUploadXAmzTargetEnumDeviceFarm20150623DeleteUpload DeleteUploadXAmzTargetEnum = "DeviceFarm_20150623.DeleteUpload"
)


type DeleteUploadHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteUploadXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteUploadRequest struct {
    Headers DeleteUploadHeaders 
    Request shared.DeleteUploadRequest `request:"mediaType=application/json"`
    
}

type DeleteUploadResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    DeleteUploadResult map[string]interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    
}

