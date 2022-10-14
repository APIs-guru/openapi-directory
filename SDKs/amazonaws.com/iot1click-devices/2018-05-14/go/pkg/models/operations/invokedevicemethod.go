package operations

import (
	"openapi/pkg/models/shared"
)

type InvokeDeviceMethodPathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
}

type InvokeDeviceMethodHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type InvokeDeviceMethodRequestBodyDeviceMethod struct {
	DeviceType *string `json:"DeviceType,omitempty"`
	MethodName *string `json:"MethodName,omitempty"`
}

type InvokeDeviceMethodRequestBody struct {
	DeviceMethod           *InvokeDeviceMethodRequestBodyDeviceMethod `json:"deviceMethod,omitempty"`
	DeviceMethodParameters *string                                    `json:"deviceMethodParameters,omitempty"`
}

type InvokeDeviceMethodRequest struct {
	PathParams InvokeDeviceMethodPathParams
	Headers    InvokeDeviceMethodHeaders
	Request    InvokeDeviceMethodRequestBody `request:"mediaType=application/json"`
}

type InvokeDeviceMethodResponse struct {
	ContentType                  string
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	InvokeDeviceMethodResponse   *shared.InvokeDeviceMethodResponse
	PreconditionFailedException  *interface{}
	RangeNotSatisfiableException *interface{}
	ResourceConflictException    *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
