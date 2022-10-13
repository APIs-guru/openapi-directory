package operations

import (
	"openapi/pkg/models/shared"
)

type GetComponentPolicyQueryParams struct {
	ComponentArn string `queryParam:"style=form,explode=true,name=componentArn"`
}

type GetComponentPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetComponentPolicyRequest struct {
	QueryParams GetComponentPolicyQueryParams
	Headers     GetComponentPolicyHeaders
}

type GetComponentPolicyResponse struct {
	CallRateLimitExceededException *interface{}
	ContentType                    string
	ForbiddenException             *interface{}
	GetComponentPolicyResponse     *shared.GetComponentPolicyResponse
	InvalidRequestException        *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
