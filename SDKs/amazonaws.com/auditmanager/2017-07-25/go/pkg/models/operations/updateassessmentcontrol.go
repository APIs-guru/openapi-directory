package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAssessmentControlPathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
	ControlID    string `pathParam:"style=simple,explode=false,name=controlId"`
	ControlSetID string `pathParam:"style=simple,explode=false,name=controlSetId"`
}

type UpdateAssessmentControlHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateAssessmentControlRequestBodyControlStatusEnum string

const (
	UpdateAssessmentControlRequestBodyControlStatusEnumUnderReview UpdateAssessmentControlRequestBodyControlStatusEnum = "UNDER_REVIEW"
	UpdateAssessmentControlRequestBodyControlStatusEnumReviewed    UpdateAssessmentControlRequestBodyControlStatusEnum = "REVIEWED"
	UpdateAssessmentControlRequestBodyControlStatusEnumInactive    UpdateAssessmentControlRequestBodyControlStatusEnum = "INACTIVE"
)

type UpdateAssessmentControlRequestBody struct {
	CommentBody   *string                                              `json:"commentBody,omitempty"`
	ControlStatus *UpdateAssessmentControlRequestBodyControlStatusEnum `json:"controlStatus,omitempty"`
}

type UpdateAssessmentControlRequest struct {
	PathParams UpdateAssessmentControlPathParams
	Headers    UpdateAssessmentControlHeaders
	Request    UpdateAssessmentControlRequestBody `request:"mediaType=application/json"`
}

type UpdateAssessmentControlResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	UpdateAssessmentControlResponse *shared.UpdateAssessmentControlResponse
	ValidationException             *interface{}
}
