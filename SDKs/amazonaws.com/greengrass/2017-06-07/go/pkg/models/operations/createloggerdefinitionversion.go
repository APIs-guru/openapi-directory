package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLoggerDefinitionVersionPathParams struct {
	LoggerDefinitionID string `pathParam:"style=simple,explode=false,name=LoggerDefinitionId"`
}

type CreateLoggerDefinitionVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
}

type CreateLoggerDefinitionVersionRequestBody struct {
	Loggers []shared.Logger `json:"Loggers,omitempty"`
}

type CreateLoggerDefinitionVersionRequest struct {
	PathParams CreateLoggerDefinitionVersionPathParams
	Headers    CreateLoggerDefinitionVersionHeaders
	Request    CreateLoggerDefinitionVersionRequestBody `request:"mediaType=application/json"`
}

type CreateLoggerDefinitionVersionResponse struct {
	BadRequestException                   *interface{}
	ContentType                           string
	CreateLoggerDefinitionVersionResponse *shared.CreateLoggerDefinitionVersionResponse
	StatusCode                            int64
}
