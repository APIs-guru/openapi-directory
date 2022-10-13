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
	Audience []string `json:"Audience"`
	Issuer   *string  `json:"Issuer"`
}

type UpdateAuthorizerRequestBody struct {
	AuthorizerCredentialsArn       *string                                        `json:"authorizerCredentialsArn"`
	AuthorizerPayloadFormatVersion *string                                        `json:"authorizerPayloadFormatVersion"`
	AuthorizerResultTTLInSeconds   *int64                                         `json:"authorizerResultTtlInSeconds"`
	AuthorizerType                 *UpdateAuthorizerRequestBodyAuthorizerTypeEnum `json:"authorizerType"`
	AuthorizerURI                  *string                                        `json:"authorizerUri"`
	EnableSimpleResponses          *bool                                          `json:"enableSimpleResponses"`
	IdentitySource                 []string                                       `json:"identitySource"`
	IdentityValidationExpression   *string                                        `json:"identityValidationExpression"`
	JwtConfiguration               *UpdateAuthorizerRequestBodyJwtConfiguration   `json:"jwtConfiguration"`
	Name                           *string                                        `json:"name"`
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
