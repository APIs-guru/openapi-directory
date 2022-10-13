package operations

import (
	"openapi/pkg/models/shared"
)

type TestInvokeAuthorizerPathParams struct {
	AuthorizerID string `pathParam:"style=simple,explode=false,name=authorizer_id"`
	RestapiID    string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type TestInvokeAuthorizerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type TestInvokeAuthorizerRequestBody struct {
	AdditionalContext   map[string]string   `json:"additionalContext"`
	Body                *string             `json:"body"`
	Headers             map[string]string   `json:"headers"`
	MultiValueHeaders   map[string][]string `json:"multiValueHeaders"`
	PathWithQueryString *string             `json:"pathWithQueryString"`
	StageVariables      map[string]string   `json:"stageVariables"`
}

type TestInvokeAuthorizerRequest struct {
	PathParams TestInvokeAuthorizerPathParams
	Headers    TestInvokeAuthorizerHeaders
	Request    TestInvokeAuthorizerRequestBody `request:"mediaType=application/json"`
}

type TestInvokeAuthorizerResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	NotFoundException            *interface{}
	StatusCode                   int64
	TestInvokeAuthorizerResponse *shared.TestInvokeAuthorizerResponse
	TooManyRequestsException     *interface{}
	UnauthorizedException        *interface{}
}
