package operations

import (
	"openapi/pkg/models/shared"
)

type ListDeviceInstancesXAmzTargetEnum string

const (
	ListDeviceInstancesXAmzTargetEnumDeviceFarm20150623ListDeviceInstances ListDeviceInstancesXAmzTargetEnum = "DeviceFarm_20150623.ListDeviceInstances"
)

type ListDeviceInstancesHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDeviceInstancesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListDeviceInstancesRequest struct {
	Headers ListDeviceInstancesHeaders
	Request shared.ListDeviceInstancesRequest `request:"mediaType=application/json"`
}

type ListDeviceInstancesResponse struct {
	ArgumentException         *interface{}
	ContentType               string
	LimitExceededException    *interface{}
	ListDeviceInstancesResult *shared.ListDeviceInstancesResult
	NotFoundException         *interface{}
	ServiceAccountException   *interface{}
	StatusCode                int64
}
