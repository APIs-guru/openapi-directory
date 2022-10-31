package operations

import (
"openapi/pkg/models/shared")


type CreateFileSystemXAmzTargetEnum string

const (
    CreateFileSystemXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateFileSystem CreateFileSystemXAmzTargetEnum = "AWSSimbaAPIService_v20180301.CreateFileSystem"
)


type CreateFileSystemHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateFileSystemXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateFileSystemRequest struct {
    Headers CreateFileSystemHeaders 
    Request shared.CreateFileSystemRequest `request:"mediaType=application/json"`
    
}

type CreateFileSystemResponse struct {
    ActiveDirectoryError *interface{} 
    BadRequest *interface{} 
    ContentType string 
    CreateFileSystemResponse *shared.CreateFileSystemResponse 
    IncompatibleParameterError *interface{} 
    InternalServerError *interface{} 
    InvalidExportPath *interface{} 
    InvalidImportPath *interface{} 
    InvalidNetworkSettings *interface{} 
    InvalidPerUnitStorageThroughput *interface{} 
    MissingFileSystemConfiguration *interface{} 
    ServiceLimitExceeded *interface{} 
    StatusCode int64 
    
}

