package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDevicePoolXAmzTargetEnum string

const (
	DeleteDevicePoolXAmzTargetEnumDeviceFarm20150623DeleteDevicePool DeleteDevicePoolXAmzTargetEnum = "DeviceFarm_20150623.DeleteDevicePool"
)

type DeleteDevicePoolHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDevicePoolXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDevicePoolRequest struct {
	Headers DeleteDevicePoolHeaders
	Request shared.DeleteDevicePoolRequest `request:"mediaType=application/json"`
}

type DeleteDevicePoolResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	DeleteDevicePoolResult  map[string]interface{}
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
