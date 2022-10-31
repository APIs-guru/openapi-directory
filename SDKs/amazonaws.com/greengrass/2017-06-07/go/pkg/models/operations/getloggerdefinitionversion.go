package operations

import (
	"openapi/pkg/models/shared"
)

type GetLoggerDefinitionVersionPathParams struct {
	LoggerDefinitionID        string `pathParam:"style=simple,explode=false,name=LoggerDefinitionId"`
	LoggerDefinitionVersionID string `pathParam:"style=simple,explode=false,name=LoggerDefinitionVersionId"`
}

type GetLoggerDefinitionVersionQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetLoggerDefinitionVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetLoggerDefinitionVersionRequest struct {
	PathParams  GetLoggerDefinitionVersionPathParams
	QueryParams GetLoggerDefinitionVersionQueryParams
	Headers     GetLoggerDefinitionVersionHeaders
}

type GetLoggerDefinitionVersionResponse struct {
	BadRequestException                *interface{}
	ContentType                        string
	GetLoggerDefinitionVersionResponse *shared.GetLoggerDefinitionVersionResponse
	StatusCode                         int64
}
