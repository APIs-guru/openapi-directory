package operations

import (
	"openapi/pkg/models/shared"
)

type TestAuthorizationQueryParams struct {
	ClientID *string `queryParam:"style=form,explode=true,name=clientId"`
}

type TestAuthorizationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type TestAuthorizationRequestBody struct {
	AuthInfos             []shared.AuthInfo `json:"authInfos"`
	CognitoIdentityPoolID *string           `json:"cognitoIdentityPoolId"`
	PolicyNamesToAdd      []string          `json:"policyNamesToAdd"`
	PolicyNamesToSkip     []string          `json:"policyNamesToSkip"`
	Principal             *string           `json:"principal"`
}

type TestAuthorizationRequest struct {
	QueryParams TestAuthorizationQueryParams
	Headers     TestAuthorizationHeaders
	Request     TestAuthorizationRequestBody `request:"mediaType=application/json"`
}

type TestAuthorizationResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	LimitExceededException      *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	TestAuthorizationResponse   *shared.TestAuthorizationResponse
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
