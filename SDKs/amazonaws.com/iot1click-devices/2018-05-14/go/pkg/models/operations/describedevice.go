package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDevicePathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
}

type DescribeDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeDeviceRequest struct {
	PathParams DescribeDevicePathParams
	Headers    DescribeDeviceHeaders
}

type DescribeDeviceResponse struct {
	ContentType               string
	DescribeDeviceResponse    *shared.DescribeDeviceResponse
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
