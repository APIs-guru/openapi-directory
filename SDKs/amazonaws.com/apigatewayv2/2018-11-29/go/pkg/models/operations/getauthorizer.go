package operations

import (
	"openapi/pkg/models/shared"
)

type GetAuthorizerPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	AuthorizerID string `pathParam:"style=simple,explode=false,name=authorizerId"`
}

type GetAuthorizerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAuthorizerRequest struct {
	PathParams GetAuthorizerPathParams
	Headers    GetAuthorizerHeaders
}

type GetAuthorizerResponse struct {
	ContentType              string
	GetAuthorizerResponse    *shared.GetAuthorizerResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
