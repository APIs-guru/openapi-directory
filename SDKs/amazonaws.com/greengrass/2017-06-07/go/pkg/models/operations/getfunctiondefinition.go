package operations

import (
	"openapi/pkg/models/shared"
)

type GetFunctionDefinitionPathParams struct {
	FunctionDefinitionID string `pathParam:"style=simple,explode=false,name=FunctionDefinitionId"`
}

type GetFunctionDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
