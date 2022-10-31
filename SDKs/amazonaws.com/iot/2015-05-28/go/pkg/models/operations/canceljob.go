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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CancelJobRequestBody struct {
	Comment    *string `json:"comment,omitempty"`
	ReasonCode *string `json:"reasonCode,omitempty"`
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
