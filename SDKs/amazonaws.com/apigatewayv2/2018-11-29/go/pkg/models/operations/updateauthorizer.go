package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAuthorizerPathParams struct {
	APIID        string `pathParam:"style=simple,explode=false,name=apiId"`
	AuthorizerID string `pathParam:"style=simple,explode=false,name=authorizerId"`
}

type UpdateAuthorizerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateAuthorizerRequestBodyAuthorizerTypeEnum string

const (
	UpdateAuthorizerRequestBodyAuthorizerTypeEnumRequest UpdateAuthorizerRequestBodyAuthorizerTypeEnum = "REQUEST"
	UpdateAuthorizerRequestBodyAuthorizerTypeEnumJwt     UpdateAuthorizerRequestBodyAuthorizerTypeEnum = "JWT"
)

type UpdateAuthorizerRequestBodyJwtConfiguration struct {
	Audience []string `json:"Audience,omitempty"`
	Issuer   *string  `json:"Issuer,omitempty"`
}

type UpdateAuthorizerRequestBody struct {
	AuthorizerCredentialsArn       *string                                        `json:"authorizerCredentialsArn,omitempty"`
	AuthorizerPayloadFormatVersion *string                                        `json:"authorizerPayloadFormatVersion,omitempty"`
	AuthorizerResultTTLInSeconds   *int64                                         `json:"authorizerResultTtlInSeconds,omitempty"`
	AuthorizerType                 *UpdateAuthorizerRequestBodyAuthorizerTypeEnum `json:"authorizerType,omitempty"`
	AuthorizerURI                  *string                                        `json:"authorizerUri,omitempty"`
	EnableSimpleResponses          *bool                                          `json:"enableSimpleResponses,omitempty"`
	IdentitySource                 []string                                       `json:"identitySource,omitempty"`
	IdentityValidationExpression   *string                                        `json:"identityValidationExpression,omitempty"`
	JwtConfiguration               *UpdateAuthorizerRequestBodyJwtConfiguration   `json:"jwtConfiguration,omitempty"`
	Name                           *string                                        `json:"name,omitempty"`
}

type UpdateAuthorizerRequest struct {
	PathParams UpdateAuthorizerPathParams
	Headers    UpdateAuthorizerHeaders
	Request    UpdateAuthorizerRequestBody `request:"mediaType=application/json"`
}

type UpdateAuthorizerResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UpdateAuthorizerResponse *shared.UpdateAuthorizerResponse
}
