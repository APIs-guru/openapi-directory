package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRestAPIHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateRestAPIRequestBodyAPIKeySourceEnum string

const (
	CreateRestAPIRequestBodyAPIKeySourceEnumHeader     CreateRestAPIRequestBodyAPIKeySourceEnum = "HEADER"
	CreateRestAPIRequestBodyAPIKeySourceEnumAuthorizer CreateRestAPIRequestBodyAPIKeySourceEnum = "AUTHORIZER"
)

type CreateRestAPIRequestBodyEndpointConfiguration struct {
	Types          []shared.EndpointTypeEnum `json:"types,omitempty"`
	VpcEndpointIds []string                  `json:"vpcEndpointIds,omitempty"`
}

type CreateRestAPIRequestBody struct {
	APIKeySource              *CreateRestAPIRequestBodyAPIKeySourceEnum      `json:"apiKeySource,omitempty"`
	BinaryMediaTypes          []string                                       `json:"binaryMediaTypes,omitempty"`
	CloneFrom                 *string                                        `json:"cloneFrom,omitempty"`
	Description               *string                                        `json:"description,omitempty"`
	DisableExecuteAPIEndpoint *bool                                          `json:"disableExecuteApiEndpoint,omitempty"`
	EndpointConfiguration     *CreateRestAPIRequestBodyEndpointConfiguration `json:"endpointConfiguration,omitempty"`
	MinimumCompressionSize    *int64                                         `json:"minimumCompressionSize,omitempty"`
	Name                      string                                         `json:"name"`
	Policy                    *string                                        `json:"policy,omitempty"`
	Tags                      map[string]string                              `json:"tags,omitempty"`
	Version                   *string                                        `json:"version,omitempty"`
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
