package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAuthorizerPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type CreateAuthorizerHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateAuthorizerRequestBodyAuthorizerTypeEnum string

const (
	CreateAuthorizerRequestBodyAuthorizerTypeEnumRequest CreateAuthorizerRequestBodyAuthorizerTypeEnum = "REQUEST"
	CreateAuthorizerRequestBodyAuthorizerTypeEnumJwt     CreateAuthorizerRequestBodyAuthorizerTypeEnum = "JWT"
)

// CreateAuthorizerRequestBodyJwtConfiguration
// Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
type CreateAuthorizerRequestBodyJwtConfiguration struct {
	Audience []string `json:"Audience,omitempty"`
	Issuer   *string  `json:"Issuer,omitempty"`
}

type CreateAuthorizerRequestBody struct {
	AuthorizerCredentialsArn       *string                                       `json:"authorizerCredentialsArn,omitempty"`
	AuthorizerPayloadFormatVersion *string                                       `json:"authorizerPayloadFormatVersion,omitempty"`
	AuthorizerResultTTLInSeconds   *int64                                        `json:"authorizerResultTtlInSeconds,omitempty"`
	AuthorizerType                 CreateAuthorizerRequestBodyAuthorizerTypeEnum `json:"authorizerType"`
	AuthorizerURI                  *string                                       `json:"authorizerUri,omitempty"`
	EnableSimpleResponses          *bool                                         `json:"enableSimpleResponses,omitempty"`
	IdentitySource                 []string                                      `json:"identitySource"`
	IdentityValidationExpression   *string                                       `json:"identityValidationExpression,omitempty"`
	JwtConfiguration               *CreateAuthorizerRequestBodyJwtConfiguration  `json:"jwtConfiguration,omitempty"`
	Name                           string                                        `json:"name"`
}

type CreateAuthorizerRequest struct {
	PathParams CreateAuthorizerPathParams
	Headers    CreateAuthorizerHeaders
	Request    CreateAuthorizerRequestBody `request:"mediaType=application/json"`
}

type CreateAuthorizerResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	CreateAuthorizerResponse *shared.CreateAuthorizerResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
