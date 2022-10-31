package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteHsmXAmzTargetEnum string

const (
	DeleteHsmXAmzTargetEnumBaldrAPIServiceDeleteHsm DeleteHsmXAmzTargetEnum = "BaldrApiService.DeleteHsm"
)

type DeleteHsmHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteHsmXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteHsmRequest struct {
	Headers DeleteHsmHeaders
	Request shared.DeleteHsmRequest `request:"mediaType=application/json"`
}

type DeleteHsmResponse struct {
	CloudHsmAccessDeniedException     *interface{}
	CloudHsmInternalFailureException  *interface{}
	CloudHsmInvalidRequestException   *interface{}
	CloudHsmResourceNotFoundException *interface{}
	CloudHsmServiceException          *interface{}
	ContentType                       string
	DeleteHsmResponse                 *shared.DeleteHsmResponse
	StatusCode                        int64
}
