package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDevicePoolXAmzTargetEnum string

const (
	UpdateDevicePoolXAmzTargetEnumDeviceFarm20150623UpdateDevicePool UpdateDevicePoolXAmzTargetEnum = "DeviceFarm_20150623.UpdateDevicePool"
)

type UpdateDevicePoolHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDevicePoolXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateDevicePoolRequest struct {
	Headers UpdateDevicePoolHeaders
	Request shared.UpdateDevicePoolRequest `request:"mediaType=application/json"`
}

type UpdateDevicePoolResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
	UpdateDevicePoolResult  *shared.UpdateDevicePoolResult
}
