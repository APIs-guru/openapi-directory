package operations

import (
	"openapi/pkg/models/shared"
)

type GetFunctionDefinitionPathParams struct {
	FunctionDefinitionID string `pathParam:"style=simple,explode=false,name=FunctionDefinitionId"`
}

type GetFunctionDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFunctionDefinitionRequest struct {
	PathParams GetFunctionDefinitionPathParams
	Headers    GetFunctionDefinitionHeaders
}

type GetFunctionDefinitionResponse struct {
	BadRequestException           *interface{}
	ContentType                   string
	GetFunctionDefinitionResponse *shared.GetFunctionDefinitionResponse
	StatusCode                    int64
}
