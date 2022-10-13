package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDevicePoolXAmzTargetEnum string

const (
	CreateDevicePoolXAmzTargetEnumDeviceFarm20150623CreateDevicePool CreateDevicePoolXAmzTargetEnum = "DeviceFarm_20150623.CreateDevicePool"
)

type CreateDevicePoolHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDevicePoolXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDevicePoolRequest struct {
	Headers CreateDevicePoolHeaders
	Request shared.CreateDevicePoolRequest `request:"mediaType=application/json"`
}

type CreateDevicePoolResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	CreateDevicePoolResult  *shared.CreateDevicePoolResult
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
