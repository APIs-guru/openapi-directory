package operations

import (
	"openapi/pkg/models/shared"
)

type GetJobDocumentPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type GetJobDocumentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetJobDocumentRequest struct {
	PathParams GetJobDocumentPathParams
	Headers    GetJobDocumentHeaders
}

type GetJobDocumentResponse struct {
	ContentType                 string
	GetJobDocumentResponse      *shared.GetJobDocumentResponse
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
