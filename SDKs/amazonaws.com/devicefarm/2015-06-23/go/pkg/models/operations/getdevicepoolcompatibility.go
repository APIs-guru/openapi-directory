package operations

import (
	"openapi/pkg/models/shared"
)

type GetDevicePoolCompatibilityXAmzTargetEnum string

const (
	GetDevicePoolCompatibilityXAmzTargetEnumDeviceFarm20150623GetDevicePoolCompatibility GetDevicePoolCompatibilityXAmzTargetEnum = "DeviceFarm_20150623.GetDevicePoolCompatibility"
)

type GetDevicePoolCompatibilityHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDevicePoolCompatibilityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDevicePoolCompatibilityRequest struct {
	Headers GetDevicePoolCompatibilityHeaders
	Request shared.GetDevicePoolCompatibilityRequest `request:"mediaType=application/json"`
}

type GetDevicePoolCompatibilityResponse struct {
	ArgumentException                *interface{}
	ContentType                      string
	GetDevicePoolCompatibilityResult *shared.GetDevicePoolCompatibilityResult
	LimitExceededException           *interface{}
	NotFoundException                *interface{}
	ServiceAccountException          *interface{}
	StatusCode                       int64
}
