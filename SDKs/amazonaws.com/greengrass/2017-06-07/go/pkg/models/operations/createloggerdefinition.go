package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLoggerDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"style=simple,explode=false,name=X-Amzn-Client-Token"`
}

// CreateLoggerDefinitionRequestBodyInitialVersion
// Information about a logger definition version.
type CreateLoggerDefinitionRequestBodyInitialVersion struct {
	Loggers []shared.Logger `json:"Loggers,omitempty"`
}

type CreateLoggerDefinitionRequestBody struct {
	InitialVersion *CreateLoggerDefinitionRequestBodyInitialVersion `json:"InitialVersion,omitempty"`
	Name           *string                                          `json:"Name,omitempty"`
	Tags           map[string]string                                `json:"tags,omitempty"`
}

type CreateLoggerDefinitionRequest struct {
	Headers CreateLoggerDefinitionHeaders
	Request CreateLoggerDefinitionRequestBody `request:"mediaType=application/json"`
}

type CreateLoggerDefinitionResponse struct {
	BadRequestException            *interface{}
	ContentType                    string
	CreateLoggerDefinitionResponse *shared.CreateLoggerDefinitionResponse
	StatusCode                     int64
}
