package operations

import (
	"openapi/pkg/models/shared"
)

type ListFunctionDefinitionVersionsPathParams struct {
	FunctionDefinitionID string `pathParam:"style=simple,explode=false,name=FunctionDefinitionId"`
}

type ListFunctionDefinitionVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFunctionDefinitionVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListFunctionDefinitionVersionsRequest struct {
	PathParams  ListFunctionDefinitionVersionsPathParams
	QueryParams ListFunctionDefinitionVersionsQueryParams
	Headers     ListFunctionDefinitionVersionsHeaders
}

type ListFunctionDefinitionVersionsResponse struct {
	BadRequestException                    *interface{}
	ContentType                            string
	ListFunctionDefinitionVersionsResponse *shared.ListFunctionDefinitionVersionsResponse
	StatusCode                             int64
}
