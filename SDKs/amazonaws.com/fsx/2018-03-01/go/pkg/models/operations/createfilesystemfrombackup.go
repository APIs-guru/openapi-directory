package operations

import (
"openapi/pkg/models/shared")


type CreateFileSystemFromBackupXAmzTargetEnum string

const (
    CreateFileSystemFromBackupXAmzTargetEnumAwsSimbaAPIServiceV20180301CreateFileSystemFromBackup CreateFileSystemFromBackupXAmzTargetEnum = "AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup"
)


type CreateFileSystemFromBackupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateFileSystemFromBackupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateFileSystemFromBackupRequest struct {
    Headers CreateFileSystemFromBackupHeaders 
    Request shared.CreateFileSystemFromBackupRequest `request:"mediaType=application/json"`
    
}

type CreateFileSystemFromBackupResponse struct {
    ActiveDirectoryError *interface{} 
    BackupNotFound *interface{} 
    BadRequest *interface{} 
    ContentType string 
    CreateFileSystemFromBackupResponse *shared.CreateFileSystemFromBackupResponse 
    IncompatibleParameterError *interface{} 
    InternalServerError *interface{} 
    InvalidNetworkSettings *interface{} 
    InvalidPerUnitStorageThroughput *interface{} 
    MissingFileSystemConfiguration *interface{} 
    ServiceLimitExceeded *interface{} 
    StatusCode int64 
    
}

