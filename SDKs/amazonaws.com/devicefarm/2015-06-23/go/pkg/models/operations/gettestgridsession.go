package operations

import (
	"openapi/pkg/models/shared"
)

type GetTestGridSessionXAmzTargetEnum string

const (
	GetTestGridSessionXAmzTargetEnumDeviceFarm20150623GetTestGridSession GetTestGridSessionXAmzTargetEnum = "DeviceFarm_20150623.GetTestGridSession"
)

type GetTestGridSessionHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTestGridSessionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetTestGridSessionRequest struct {
	Headers GetTestGridSessionHeaders
	Request shared.GetTestGridSessionRequest `request:"mediaType=application/json"`
}

type GetTestGridSessionResponse struct {
	ArgumentException        *interface{}
	ContentType              string
	GetTestGridSessionResult *shared.GetTestGridSessionResult
	InternalServiceException *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
}
