package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePolicyVersionPathParams struct {
	PolicyName string `pathParam:"style=simple,explode=false,name=policyName"`
}

type CreatePolicyVersionQueryParams struct {
	SetAsDefault *bool `queryParam:"style=form,explode=true,name=setAsDefault"`
}

type CreatePolicyVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreatePolicyVersionRequestBody struct {
	PolicyDocument string `json:"policyDocument"`
}

type CreatePolicyVersionRequest struct {
	PathParams  CreatePolicyVersionPathParams
	QueryParams CreatePolicyVersionQueryParams
	Headers     CreatePolicyVersionHeaders
	Request     CreatePolicyVersionRequestBody `request:"mediaType=application/json"`
}

type CreatePolicyVersionResponse struct {
	ContentType                    string
	CreatePolicyVersionResponse    *shared.CreatePolicyVersionResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	MalformedPolicyException       *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UnauthorizedException          *interface{}
	VersionsLimitExceededException *interface{}
}
