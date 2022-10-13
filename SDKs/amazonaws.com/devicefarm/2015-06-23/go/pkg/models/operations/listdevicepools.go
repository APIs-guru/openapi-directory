package operations

import (
	"openapi/pkg/models/shared"
)

type ListDevicePoolsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListDevicePoolsXAmzTargetEnum string

const (
	ListDevicePoolsXAmzTargetEnumDeviceFarm20150623ListDevicePools ListDevicePoolsXAmzTargetEnum = "DeviceFarm_20150623.ListDevicePools"
)

type ListDevicePoolsHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDevicePoolsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDevicePoolsRequest struct {
	QueryParams ListDevicePoolsQueryParams
	Headers     ListDevicePoolsHeaders
	Request     shared.ListDevicePoolsRequest `request:"mediaType=application/json"`
}

type ListDevicePoolsResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	LimitExceededException  *interface{}
	ListDevicePoolsResult   *shared.ListDevicePoolsResult
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
