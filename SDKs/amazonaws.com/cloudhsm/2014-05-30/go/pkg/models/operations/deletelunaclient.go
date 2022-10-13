package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLunaClientXAmzTargetEnum string

const (
	DeleteLunaClientXAmzTargetEnumCloudHsmFrontendServiceDeleteLunaClient DeleteLunaClientXAmzTargetEnum = "CloudHsmFrontendService.DeleteLunaClient"
)

type DeleteLunaClientHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLunaClientXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteLunaClientRequest struct {
	Headers DeleteLunaClientHeaders
	Request shared.DeleteLunaClientRequest `request:"mediaType=application/json"`
}

type DeleteLunaClientResponse struct {
	CloudHsmInternalException *interface{}
	CloudHsmServiceException  *interface{}
	ContentType               string
	DeleteLunaClientResponse  *shared.DeleteLunaClientResponse
	InvalidRequestException   *interface{}
	StatusCode                int64
}
