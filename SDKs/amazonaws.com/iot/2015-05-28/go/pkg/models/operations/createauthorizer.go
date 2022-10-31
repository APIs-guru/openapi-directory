package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAuthorizerPathParams struct {
	AuthorizerName string `pathParam:"style=simple,explode=false,name=authorizerName"`
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

type CreateAuthorizerRequestBodyStatusEnum string

const (
	CreateAuthorizerRequestBodyStatusEnumActive   CreateAuthorizerRequestBodyStatusEnum = "ACTIVE"
	CreateAuthorizerRequestBodyStatusEnumInactive CreateAuthorizerRequestBodyStatusEnum = "INACTIVE"
)

type CreateAuthorizerRequestBody struct {
	AuthorizerFunctionArn  string                                 `json:"authorizerFunctionArn"`
	SigningDisabled        *bool                                  `json:"signingDisabled,omitempty"`
	Status                 *CreateAuthorizerRequestBodyStatusEnum `json:"status,omitempty"`
	Tags                   []shared.Tag                           `json:"tags,omitempty"`
	TokenKeyName           *string                                `json:"tokenKeyName,omitempty"`
	TokenSigningPublicKeys map[string]string                      `json:"tokenSigningPublicKeys,omitempty"`
}

type CreateAuthorizerRequest struct {
	PathParams CreateAuthorizerPathParams
	Headers    CreateAuthorizerHeaders
	Request    CreateAuthorizerRequestBody `request:"mediaType=application/json"`
}

type CreateAuthorizerResponse struct {
	ContentType                    string
	CreateAuthorizerResponse       *shared.CreateAuthorizerResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UnauthorizedException          *interface{}
}
