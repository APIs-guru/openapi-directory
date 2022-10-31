package operations

import (
"openapi/pkg/models/shared")


type CopyBackupXAmzTargetEnum string

const (
    CopyBackupXAmzTargetEnumAwsSimbaAPIServiceV20180301CopyBackup CopyBackupXAmzTargetEnum = "AWSSimbaAPIService_v20180301.CopyBackup"
)


type CopyBackupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CopyBackupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CopyBackupRequest struct {
    Headers CopyBackupHeaders 
    Request shared.CopyBackupRequest `request:"mediaType=application/json"`
    
}

type CopyBackupResponse struct {
    BackupNotFound *interface{} 
    BadRequest *interface{} 
    ContentType string 
    CopyBackupResponse *shared.CopyBackupResponse 
    IncompatibleParameterError *interface{} 
    IncompatibleRegionForMultiAz *interface{} 
    InternalServerError *interface{} 
    InvalidDestinationKmsKey *interface{} 
    InvalidRegion *interface{} 
    InvalidSourceKmsKey *interface{} 
    ServiceLimitExceeded *interface{} 
    SourceBackupUnavailable *interface{} 
    StatusCode int64 
    UnsupportedOperation *interface{} 
    
}

