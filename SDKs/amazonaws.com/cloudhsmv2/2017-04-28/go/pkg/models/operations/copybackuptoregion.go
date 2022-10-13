package operations

import (
	"openapi/pkg/models/shared"
)

type CopyBackupToRegionXAmzTargetEnum string

const (
	CopyBackupToRegionXAmzTargetEnumBaldrAPIServiceCopyBackupToRegion CopyBackupToRegionXAmzTargetEnum = "BaldrApiService.CopyBackupToRegion"
)

type CopyBackupToRegionHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CopyBackupToRegionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CopyBackupToRegionRequest struct {
	Headers CopyBackupToRegionHeaders
	Request shared.CopyBackupToRegionRequest `request:"mediaType=application/json"`
}

type CopyBackupToRegionResponse struct {
	CloudHsmAccessDeniedException     *interface{}
	CloudHsmInternalFailureException  *interface{}
	CloudHsmInvalidRequestException   *interface{}
	CloudHsmResourceNotFoundException *interface{}
	CloudHsmServiceException          *interface{}
	CloudHsmTagException              *interface{}
	ContentType                       string
	CopyBackupToRegionResponse        *shared.CopyBackupToRegionResponse
	StatusCode                        int64
}
