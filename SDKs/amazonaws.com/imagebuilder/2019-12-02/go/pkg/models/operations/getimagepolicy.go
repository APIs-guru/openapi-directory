package operations

import (
	"openapi/pkg/models/shared"
)

type GetImagePolicyQueryParams struct {
	ImageArn string `queryParam:"style=form,explode=true,name=imageArn"`
}

type GetImagePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetImagePolicyRequest struct {
	QueryParams GetImagePolicyQueryParams
	Headers     GetImagePolicyHeaders
}

type GetImagePolicyResponse struct {
	CallRateLimitExceededException *interface{}
	ContentType                    string
	ForbiddenException             *interface{}
	GetImagePolicyResponse         *shared.GetImagePolicyResponse
	InvalidRequestException        *interface{}
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
