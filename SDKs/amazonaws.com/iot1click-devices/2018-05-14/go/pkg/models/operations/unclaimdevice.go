package operations

import (
	"openapi/pkg/models/shared"
)

type UnclaimDevicePathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
}

type UnclaimDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UnclaimDeviceRequest struct {
	PathParams UnclaimDevicePathParams
	Headers    UnclaimDeviceHeaders
}

type UnclaimDeviceResponse struct {
	ContentType               string
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UnclaimDeviceResponse     *shared.UnclaimDeviceResponse
}
