package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFeedbackHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeFeedbackRequestBody struct {
	InsightID *string `json:"InsightId,omitempty"`
}

type DescribeFeedbackRequest struct {
	Headers DescribeFeedbackHeaders
	Request DescribeFeedbackRequestBody `request:"mediaType=application/json"`
}

type DescribeFeedbackResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeFeedbackResponse  *shared.DescribeFeedbackResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
