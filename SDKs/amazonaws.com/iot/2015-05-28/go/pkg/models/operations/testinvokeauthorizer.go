package operations

import (
	"openapi/pkg/models/shared"
)

type TestInvokeAuthorizerPathParams struct {
	AuthorizerName string `pathParam:"style=simple,explode=false,name=authorizerName"`
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

type TestInvokeAuthorizerRequestBodyHTTPContext struct {
	Headers     map[string]string `json:"headers"`
	QueryString *string           `json:"queryString"`
}

type TestInvokeAuthorizerRequestBodyMqttContext struct {
	ClientID *string `json:"clientId"`
	Password *string `json:"password"`
	Username *string `json:"username"`
}

type TestInvokeAuthorizerRequestBodyTLSContext struct {
	ServerName *string `json:"serverName"`
}

type TestInvokeAuthorizerRequestBody struct {
	HTTPContext    *TestInvokeAuthorizerRequestBodyHTTPContext `json:"httpContext"`
	MqttContext    *TestInvokeAuthorizerRequestBodyMqttContext `json:"mqttContext"`
	TLSContext     *TestInvokeAuthorizerRequestBodyTLSContext  `json:"tlsContext"`
	Token          *string                                     `json:"token"`
	TokenSignature *string                                     `json:"tokenSignature"`
}

type TestInvokeAuthorizerRequest struct {
	PathParams TestInvokeAuthorizerPathParams
	Headers    TestInvokeAuthorizerHeaders
	Request    TestInvokeAuthorizerRequestBody `request:"mediaType=application/json"`
}

type TestInvokeAuthorizerResponse struct {
	ContentType                  string
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	InvalidResponseException     *interface{}
	ResourceNotFoundException    *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TestInvokeAuthorizerResponse *shared.TestInvokeAuthorizerResponse
	ThrottlingException          *interface{}
	UnauthorizedException        *interface{}
}
