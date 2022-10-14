package operations

import (
	"openapi/pkg/models/shared"
)

type GetEffectivePoliciesQueryParams struct {
	ThingName *string `queryParam:"style=form,explode=true,name=thingName"`
}

type GetEffectivePoliciesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEffectivePoliciesRequestBody struct {
	CognitoIdentityPoolID *string `json:"cognitoIdentityPoolId,omitempty"`
	Principal             *string `json:"principal,omitempty"`
}

type GetEffectivePoliciesRequest struct {
	QueryParams GetEffectivePoliciesQueryParams
	Headers     GetEffectivePoliciesHeaders
	Request     GetEffectivePoliciesRequestBody `request:"mediaType=application/json"`
}

type GetEffectivePoliciesResponse struct {
	ContentType                  string
	GetEffectivePoliciesResponse *shared.GetEffectivePoliciesResponse
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	LimitExceededException       *interface{}
	ResourceNotFoundException    *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
	UnauthorizedException        *interface{}
}
