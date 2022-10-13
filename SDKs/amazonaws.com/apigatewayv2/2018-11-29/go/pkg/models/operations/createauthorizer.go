package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAuthorizerPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type CreateAuthorizerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAuthorizerRequestBodyAuthorizerTypeEnum string

const (
	CreateAuthorizerRequestBodyAuthorizerTypeEnumRequest CreateAuthorizerRequestBodyAuthorizerTypeEnum = "REQUEST"
	CreateAuthorizerRequestBodyAuthorizerTypeEnumJwt     CreateAuthorizerRequestBodyAuthorizerTypeEnum = "JWT"
)

type CreateAuthorizerRequestBodyJwtConfiguration struct {
	Audience []string `json:"Audience"`
	Issuer   *string  `json:"Issuer"`
}

type CreateAuthorizerRequestBody struct {
	AuthorizerCredentialsArn       *string                                       `json:"authorizerCredentialsArn"`
	AuthorizerPayloadFormatVersion *string                                       `json:"authorizerPayloadFormatVersion"`
	AuthorizerResultTTLInSeconds   *int64                                        `json:"authorizerResultTtlInSeconds"`
	AuthorizerType                 CreateAuthorizerRequestBodyAuthorizerTypeEnum `json:"authorizerType"`
	AuthorizerURI                  *string                                       `json:"authorizerUri"`
	EnableSimpleResponses          *bool                                         `json:"enableSimpleResponses"`
	IdentitySource                 []string                                      `json:"identitySource"`
	IdentityValidationExpression   *string                                       `json:"identityValidationExpression"`
	JwtConfiguration               *CreateAuthorizerRequestBodyJwtConfiguration  `json:"jwtConfiguration"`
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
