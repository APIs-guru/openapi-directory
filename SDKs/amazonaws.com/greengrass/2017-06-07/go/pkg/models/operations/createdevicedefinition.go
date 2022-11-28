package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeviceDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"style=simple,explode=false,name=X-Amzn-Client-Token"`
}

// CreateDeviceDefinitionRequestBodyInitialVersion
// Information about a device definition version.
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
