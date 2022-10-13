package operations

import (
	"openapi/pkg/models/shared"
)

type ListLoggerDefinitionVersionsPathParams struct {
	LoggerDefinitionID string `pathParam:"style=simple,explode=false,name=LoggerDefinitionId"`
}

type ListLoggerDefinitionVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListLoggerDefinitionVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListLoggerDefinitionVersionsRequest struct {
	PathParams  ListLoggerDefinitionVersionsPathParams
	QueryParams ListLoggerDefinitionVersionsQueryParams
	Headers     ListLoggerDefinitionVersionsHeaders
}

type ListLoggerDefinitionVersionsResponse struct {
	BadRequestException                  *interface{}
	ContentType                          string
	ListLoggerDefinitionVersionsResponse *shared.ListLoggerDefinitionVersionsResponse
	StatusCode                           int64
}
