package operations

import (
"openapi/pkg/models/shared")


type CopyBackupToRegionXAmzTargetEnum string

const (
    CopyBackupToRegionXAmzTargetEnumBaldrAPIServiceCopyBackupToRegion CopyBackupToRegionXAmzTargetEnum = "BaldrApiService.CopyBackupToRegion"
)


type CopyBackupToRegionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CopyBackupToRegionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CopyBackupToRegionRequest struct {
    Headers CopyBackupToRegionHeaders 
    Request shared.CopyBackupToRegionRequest `request:"mediaType=application/json"`
    
}

type CopyBackupToRegionResponse struct {
    CloudHsmAccessDeniedException *interface{} 
    CloudHsmInternalFailureException *interface{} 
    CloudHsmInvalidRequestException *interface{} 
    CloudHsmResourceNotFoundException *interface{} 
    CloudHsmServiceException *interface{} 
    CloudHsmTagException *interface{} 
    ContentType string 
    CopyBackupToRegionResponse *shared.CopyBackupToRegionResponse 
    StatusCode int64 
    
}

