package operations

import (
	"openapi/pkg/models/shared"
)

type GetFunctionPathParams struct {
	APIID      string `pathParam:"style=simple,explode=false,name=apiId"`
	FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
}

type GetFunctionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFunctionRequest struct {
	PathParams GetFunctionPathParams
	Headers    GetFunctionHeaders
}

type GetFunctionResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	GetFunctionResponse             *shared.GetFunctionResponse
	NotFoundException               *interface{}
	StatusCode                      int64
	UnauthorizedException           *interface{}
}
