package operations

import (
	"openapi/pkg/models/shared"
)

type GetLoggerDefinitionPathParams struct {
	LoggerDefinitionID string `pathParam:"style=simple,explode=false,name=LoggerDefinitionId"`
}

type GetLoggerDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetLoggerDefinitionRequest struct {
	PathParams GetLoggerDefinitionPathParams
	Headers    GetLoggerDefinitionHeaders
}

type GetLoggerDefinitionResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	GetLoggerDefinitionResponse *shared.GetLoggerDefinitionResponse
	StatusCode                  int64
}
