package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLoggerDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
}

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
