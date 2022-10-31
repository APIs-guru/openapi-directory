package operations

import (
"openapi/pkg/models/shared")


type UpdateFileSystemXAmzTargetEnum string

const (
    UpdateFileSystemXAmzTargetEnumAwsSimbaAPIServiceV20180301UpdateFileSystem UpdateFileSystemXAmzTargetEnum = "AWSSimbaAPIService_v20180301.UpdateFileSystem"
)


type UpdateFileSystemHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateFileSystemXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateFileSystemRequest struct {
    Headers UpdateFileSystemHeaders 
    Request shared.UpdateFileSystemRequest `request:"mediaType=application/json"`
    
}

type UpdateFileSystemResponse struct {
    BadRequest *interface{} 
    ContentType string 
    FileSystemNotFound *interface{} 
    IncompatibleParameterError *interface{} 
    InternalServerError *interface{} 
    MissingFileSystemConfiguration *interface{} 
    ServiceLimitExceeded *interface{} 
    StatusCode int64 
    UnsupportedOperation *interface{} 
    UpdateFileSystemResponse *shared.UpdateFileSystemResponse 
    
}

