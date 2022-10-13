package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeviceXAmzTargetEnum string

const (
	GetDeviceXAmzTargetEnumDeviceFarm20150623GetDevice GetDeviceXAmzTargetEnum = "DeviceFarm_20150623.GetDevice"
)

type GetDeviceHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDeviceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDeviceRequest struct {
	Headers GetDeviceHeaders
	Request shared.GetDeviceRequest `request:"mediaType=application/json"`
}

type GetDeviceResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	GetDeviceResult         *shared.GetDeviceResult
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
