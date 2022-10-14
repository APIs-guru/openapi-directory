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
	Headers     map[string]string `json:"headers,omitempty"`
	QueryString *string           `json:"queryString,omitempty"`
}

type TestInvokeAuthorizerRequestBodyMqttContext struct {
	ClientID *string `json:"clientId,omitempty"`
	Password *string `json:"password,omitempty"`
	Username *string `json:"username,omitempty"`
}

type TestInvokeAuthorizerRequestBodyTLSContext struct {
	ServerName *string `json:"serverName,omitempty"`
}

type TestInvokeAuthorizerRequestBody struct {
	HTTPContext    *TestInvokeAuthorizerRequestBodyHTTPContext `json:"httpContext,omitempty"`
	MqttContext    *TestInvokeAuthorizerRequestBodyMqttContext `json:"mqttContext,omitempty"`
	TLSContext     *TestInvokeAuthorizerRequestBodyTLSContext  `json:"tlsContext,omitempty"`
	Token          *string                                     `json:"token,omitempty"`
	TokenSignature *string                                     `json:"tokenSignature,omitempty"`
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
