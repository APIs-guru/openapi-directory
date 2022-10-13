package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyHsmXAmzTargetEnum string

const (
	ModifyHsmXAmzTargetEnumCloudHsmFrontendServiceModifyHsm ModifyHsmXAmzTargetEnum = "CloudHsmFrontendService.ModifyHsm"
)

type ModifyHsmHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyHsmXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyHsmRequest struct {
	Headers ModifyHsmHeaders
	Request shared.ModifyHsmRequest `request:"mediaType=application/json"`
}

type ModifyHsmResponse struct {
	CloudHsmInternalException *interface{}
	CloudHsmServiceException  *interface{}
	ContentType               string
	InvalidRequestException   *interface{}
	ModifyHsmResponse         *shared.ModifyHsmResponse
	StatusCode                int64
}
