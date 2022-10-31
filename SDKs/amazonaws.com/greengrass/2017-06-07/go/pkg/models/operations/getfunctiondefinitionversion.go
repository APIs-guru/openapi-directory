package operations

import (
	"openapi/pkg/models/shared"
)

type GetFunctionDefinitionVersionPathParams struct {
	FunctionDefinitionID        string `pathParam:"style=simple,explode=false,name=FunctionDefinitionId"`
	FunctionDefinitionVersionID string `pathParam:"style=simple,explode=false,name=FunctionDefinitionVersionId"`
}

type GetFunctionDefinitionVersionQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetFunctionDefinitionVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetFunctionDefinitionVersionRequest struct {
	PathParams  GetFunctionDefinitionVersionPathParams
	QueryParams GetFunctionDefinitionVersionQueryParams
	Headers     GetFunctionDefinitionVersionHeaders
}

type GetFunctionDefinitionVersionResponse struct {
	BadRequestException                  *interface{}
	ContentType                          string
	GetFunctionDefinitionVersionResponse *shared.GetFunctionDefinitionVersionResponse
	StatusCode                           int64
}
