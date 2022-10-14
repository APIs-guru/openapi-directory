package operations

import (
	"openapi/pkg/models/shared"
)

type PutFeedbackHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

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
