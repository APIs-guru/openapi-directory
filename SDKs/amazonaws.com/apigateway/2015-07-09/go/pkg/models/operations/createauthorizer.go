package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAuthorizerPathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
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

type CreateAuthorizerRequestBodyTypeEnum string

const (
	CreateAuthorizerRequestBodyTypeEnumToken            CreateAuthorizerRequestBodyTypeEnum = "TOKEN"
	CreateAuthorizerRequestBodyTypeEnumRequest          CreateAuthorizerRequestBodyTypeEnum = "REQUEST"
	CreateAuthorizerRequestBodyTypeEnumCognitoUserPools CreateAuthorizerRequestBodyTypeEnum = "COGNITO_USER_POOLS"
)

type CreateAuthorizerRequestBody struct {
	AuthType                     *string                             `json:"authType"`
	AuthorizerCredentials        *string                             `json:"authorizerCredentials"`
	AuthorizerResultTTLInSeconds *int64                              `json:"authorizerResultTtlInSeconds"`
	AuthorizerURI                *string                             `json:"authorizerUri"`
	IdentitySource               *string                             `json:"identitySource"`
	IdentityValidationExpression *string                             `json:"identityValidationExpression"`
	Name                         string                              `json:"name"`
	ProviderArNs                 []string                            `json:"providerARNs"`
	Type                         CreateAuthorizerRequestBodyTypeEnum `json:"type"`
}

type CreateAuthorizerRequest struct {
	PathParams CreateAuthorizerPathParams
	Headers    CreateAuthorizerHeaders
	Request    CreateAuthorizerRequestBody `request:"mediaType=application/json"`
}

type CreateAuthorizerResponse struct {
	Authorizer               *shared.Authorizer
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
