package operations

import (
	"openapi/pkg/models/shared"
)

type GetTestGridProjectXAmzTargetEnum string

const (
	GetTestGridProjectXAmzTargetEnumDeviceFarm20150623GetTestGridProject GetTestGridProjectXAmzTargetEnum = "DeviceFarm_20150623.GetTestGridProject"
)

type GetTestGridProjectHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTestGridProjectXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetTestGridProjectRequest struct {
	Headers GetTestGridProjectHeaders
	Request shared.GetTestGridProjectRequest `request:"mediaType=application/json"`
}

type GetTestGridProjectResponse struct {
	ArgumentException        *interface{}
	ContentType              string
	GetTestGridProjectResult *shared.GetTestGridProjectResult
	InternalServiceException *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
}
