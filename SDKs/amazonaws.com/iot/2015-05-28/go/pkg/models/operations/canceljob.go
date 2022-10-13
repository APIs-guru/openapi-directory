package operations

import (
	"openapi/pkg/models/shared"
)

type CancelJobPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type CancelJobQueryParams struct {
	Force *bool `queryParam:"style=form,explode=true,name=force"`
}

type CancelJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CancelJobRequestBody struct {
	Comment    *string `json:"comment"`
	ReasonCode *string `json:"reasonCode"`
}

type CancelJobRequest struct {
	PathParams  CancelJobPathParams
	QueryParams CancelJobQueryParams
	Headers     CancelJobHeaders
	Request     CancelJobRequestBody `request:"mediaType=application/json"`
}

type CancelJobResponse struct {
	CancelJobResponse           *shared.CancelJobResponse
	ContentType                 string
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
