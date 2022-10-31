package operations

import (
	"openapi/pkg/models/shared"
)

type GetDevicePoolXAmzTargetEnum string

const (
	GetDevicePoolXAmzTargetEnumDeviceFarm20150623GetDevicePool GetDevicePoolXAmzTargetEnum = "DeviceFarm_20150623.GetDevicePool"
)

type GetDevicePoolHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDevicePoolXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetDevicePoolRequest struct {
	Headers GetDevicePoolHeaders
	Request shared.GetDevicePoolRequest `request:"mediaType=application/json"`
}

type GetDevicePoolResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	GetDevicePoolResult     *shared.GetDevicePoolResult
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
