package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeviceMethodsPathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
}

type GetDeviceMethodsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeviceMethodsRequest struct {
	PathParams GetDeviceMethodsPathParams
	Headers    GetDeviceMethodsHeaders
}

type GetDeviceMethodsResponse struct {
	ContentType               string
	GetDeviceMethodsResponse  *shared.GetDeviceMethodsResponse
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
