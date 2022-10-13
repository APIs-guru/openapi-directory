package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyBackupAttributesXAmzTargetEnum string

const (
	ModifyBackupAttributesXAmzTargetEnumBaldrAPIServiceModifyBackupAttributes ModifyBackupAttributesXAmzTargetEnum = "BaldrApiService.ModifyBackupAttributes"
)

type ModifyBackupAttributesHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyBackupAttributesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyBackupAttributesRequest struct {
	Headers ModifyBackupAttributesHeaders
	Request shared.ModifyBackupAttributesRequest `request:"mediaType=application/json"`
}

type ModifyBackupAttributesResponse struct {
	CloudHsmAccessDeniedException     *interface{}
	CloudHsmInternalFailureException  *interface{}
	CloudHsmInvalidRequestException   *interface{}
	CloudHsmResourceNotFoundException *interface{}
	CloudHsmServiceException          *interface{}
	ContentType                       string
	ModifyBackupAttributesResponse    *shared.ModifyBackupAttributesResponse
	StatusCode                        int64
}
