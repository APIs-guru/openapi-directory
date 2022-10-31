package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDeviceInstanceXAmzTargetEnum string

const (
	UpdateDeviceInstanceXAmzTargetEnumDeviceFarm20150623UpdateDeviceInstance UpdateDeviceInstanceXAmzTargetEnum = "DeviceFarm_20150623.UpdateDeviceInstance"
)

type UpdateDeviceInstanceHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDeviceInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateDeviceInstanceRequest struct {
	Headers UpdateDeviceInstanceHeaders
	Request shared.UpdateDeviceInstanceRequest `request:"mediaType=application/json"`
}

type UpdateDeviceInstanceResponse struct {
	ArgumentException          *interface{}
	ContentType                string
	LimitExceededException     *interface{}
	NotFoundException          *interface{}
	ServiceAccountException    *interface{}
	StatusCode                 int64
	UpdateDeviceInstanceResult *shared.UpdateDeviceInstanceResult
}
