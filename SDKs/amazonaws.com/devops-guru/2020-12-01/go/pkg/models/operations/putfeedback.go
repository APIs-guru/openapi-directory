package operations

import (
	"openapi/pkg/models/shared"
)

type PutFeedbackHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// PutFeedbackRequestBodyInsightFeedback
//
//	Information about insight feedback received from a customer.
type PutFeedbackRequestBodyInsightFeedback struct {
	Feedback *shared.InsightFeedbackOptionEnum `json:"Feedback,omitempty"`
	ID       *string                           `json:"Id,omitempty"`
}

type PutFeedbackRequestBody struct {
	InsightFeedback *PutFeedbackRequestBodyInsightFeedback `json:"InsightFeedback,omitempty"`
}

type PutFeedbackRequest struct {
	Headers PutFeedbackHeaders
	Request PutFeedbackRequestBody `request:"mediaType=application/json"`
}

type PutFeedbackResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	PutFeedbackResponse       map[string]interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
