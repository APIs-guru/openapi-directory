package operations

import (
	"openapi/pkg/models/shared"
)

type TestInvokeMethodPathParams struct {
	HTTPMethod string `pathParam:"style=simple,explode=false,name=http_method"`
	ResourceID string `pathParam:"style=simple,explode=false,name=resource_id"`
	RestapiID  string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type TestInvokeMethodHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type TestInvokeMethodRequestBody struct {
	Body                *string             `json:"body,omitempty"`
	ClientCertificateID *string             `json:"clientCertificateId,omitempty"`
	Headers             map[string]string   `json:"headers,omitempty"`
	MultiValueHeaders   map[string][]string `json:"multiValueHeaders,omitempty"`
	PathWithQueryString *string             `json:"pathWithQueryString,omitempty"`
	StageVariables      map[string]string   `json:"stageVariables,omitempty"`
}

type TestInvokeMethodRequest struct {
	PathParams TestInvokeMethodPathParams
	Headers    TestInvokeMethodHeaders
	Request    TestInvokeMethodRequestBody `request:"mediaType=application/json"`
}

type TestInvokeMethodResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TestInvokeMethodResponse *shared.TestInvokeMethodResponse
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
