package operations

import (
"openapi/pkg/models/shared")


type RestoreBackupXAmzTargetEnum string

const (
    RestoreBackupXAmzTargetEnumBaldrAPIServiceRestoreBackup RestoreBackupXAmzTargetEnum = "BaldrApiService.RestoreBackup"
)


type RestoreBackupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RestoreBackupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RestoreBackupRequest struct {
    Headers RestoreBackupHeaders 
    Request shared.RestoreBackupRequest `request:"mediaType=application/json"`
    
}

type RestoreBackupResponse struct {
    CloudHsmAccessDeniedException *interface{} 
    CloudHsmInternalFailureException *interface{} 
    CloudHsmInvalidRequestException *interface{} 
    CloudHsmResourceNotFoundException *interface{} 
    CloudHsmServiceException *interface{} 
    ContentType string 
    RestoreBackupResponse *shared.RestoreBackupResponse 
    StatusCode int64 
    
}

