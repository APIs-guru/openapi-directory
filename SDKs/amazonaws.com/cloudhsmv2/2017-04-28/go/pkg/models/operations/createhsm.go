package operations

import (
	"openapi/pkg/models/shared"
)

type CreateHsmXAmzTargetEnum string

const (
	CreateHsmXAmzTargetEnumBaldrAPIServiceCreateHsm CreateHsmXAmzTargetEnum = "BaldrApiService.CreateHsm"
)

type CreateHsmHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateHsmXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateHsmRequest struct {
	Headers CreateHsmHeaders
	Request shared.CreateHsmRequest `request:"mediaType=application/json"`
}

type CreateHsmResponse struct {
	CloudHsmAccessDeniedException     *interface{}
	CloudHsmInternalFailureException  *interface{}
	CloudHsmInvalidRequestException   *interface{}
	CloudHsmResourceNotFoundException *interface{}
	CloudHsmServiceException          *interface{}
	ContentType                       string
	CreateHsmResponse                 *shared.CreateHsmResponse
	StatusCode                        int64
}
