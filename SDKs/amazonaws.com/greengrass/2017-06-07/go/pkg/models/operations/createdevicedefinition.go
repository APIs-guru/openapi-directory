package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeviceDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
}

type CreateDeviceDefinitionRequestBodyInitialVersion struct {
	Devices []shared.Device `json:"Devices,omitempty"`
}

type CreateDeviceDefinitionRequestBody struct {
	InitialVersion *CreateDeviceDefinitionRequestBodyInitialVersion `json:"InitialVersion,omitempty"`
	Name           *string                                          `json:"Name,omitempty"`
	Tags           map[string]string                                `json:"tags,omitempty"`
}

type CreateDeviceDefinitionRequest struct {
	Headers CreateDeviceDefinitionHeaders
	Request CreateDeviceDefinitionRequestBody `request:"mediaType=application/json"`
}

type CreateDeviceDefinitionResponse struct {
	BadRequestException            *interface{}
	ContentType                    string
	CreateDeviceDefinitionResponse *shared.CreateDeviceDefinitionResponse
	StatusCode                     int64
}
