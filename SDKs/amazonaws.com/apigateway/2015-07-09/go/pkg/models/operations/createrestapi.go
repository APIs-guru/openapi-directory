package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRestAPIHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateRestAPIRequestBodyAPIKeySourceEnum string

const (
	CreateRestAPIRequestBodyAPIKeySourceEnumHeader     CreateRestAPIRequestBodyAPIKeySourceEnum = "HEADER"
	CreateRestAPIRequestBodyAPIKeySourceEnumAuthorizer CreateRestAPIRequestBodyAPIKeySourceEnum = "AUTHORIZER"
)

type CreateRestAPIRequestBodyEndpointConfiguration struct {
	Types          []shared.EndpointTypeEnum `json:"types"`
	VpcEndpointIds []string                  `json:"vpcEndpointIds"`
}

type CreateRestAPIRequestBody struct {
	APIKeySource              *CreateRestAPIRequestBodyAPIKeySourceEnum      `json:"apiKeySource"`
	BinaryMediaTypes          []string                                       `json:"binaryMediaTypes"`
	CloneFrom                 *string                                        `json:"cloneFrom"`
	Description               *string                                        `json:"description"`
	DisableExecuteAPIEndpoint *bool                                          `json:"disableExecuteApiEndpoint"`
	EndpointConfiguration     *CreateRestAPIRequestBodyEndpointConfiguration `json:"endpointConfiguration"`
	MinimumCompressionSize    *int64                                         `json:"minimumCompressionSize"`
	Name                      string                                         `json:"name"`
	Policy                    *string                                        `json:"policy"`
	Tags                      map[string]string                              `json:"tags"`
	Version                   *string                                        `json:"version"`
}

type CreateRestAPIRequest struct {
	Headers CreateRestAPIHeaders
	Request CreateRestAPIRequestBody `request:"mediaType=application/json"`
}

type CreateRestAPIResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	RestAPI                  *shared.RestAPI
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
