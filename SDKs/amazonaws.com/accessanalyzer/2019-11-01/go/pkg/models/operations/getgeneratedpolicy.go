package operations

import (
	"openapi/pkg/models/shared"
)

type GetGeneratedPolicyPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type GetGeneratedPolicyQueryParams struct {
	IncludeResourcePlaceholders *bool `queryParam:"style=form,explode=true,name=includeResourcePlaceholders"`
	IncludeServiceLevelTemplate *bool `queryParam:"style=form,explode=true,name=includeServiceLevelTemplate"`
}

type GetGeneratedPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGeneratedPolicyRequest struct {
	PathParams  GetGeneratedPolicyPathParams
	QueryParams GetGeneratedPolicyQueryParams
	Headers     GetGeneratedPolicyHeaders
}

type GetGeneratedPolicyResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	GetGeneratedPolicyResponse *shared.GetGeneratedPolicyResponse
	InternalServerException    *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
