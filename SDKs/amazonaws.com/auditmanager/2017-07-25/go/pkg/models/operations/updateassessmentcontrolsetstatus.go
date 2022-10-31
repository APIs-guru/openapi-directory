package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAssessmentControlSetStatusPathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
	ControlSetID string `pathParam:"style=simple,explode=false,name=controlSetId"`
}

type UpdateAssessmentControlSetStatusHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateAssessmentControlSetStatusRequestBodyStatusEnum string

const (
	UpdateAssessmentControlSetStatusRequestBodyStatusEnumActive      UpdateAssessmentControlSetStatusRequestBodyStatusEnum = "ACTIVE"
	UpdateAssessmentControlSetStatusRequestBodyStatusEnumUnderReview UpdateAssessmentControlSetStatusRequestBodyStatusEnum = "UNDER_REVIEW"
	UpdateAssessmentControlSetStatusRequestBodyStatusEnumReviewed    UpdateAssessmentControlSetStatusRequestBodyStatusEnum = "REVIEWED"
)

type UpdateAssessmentControlSetStatusRequestBody struct {
	Comment string                                                `json:"comment"`
	Status  UpdateAssessmentControlSetStatusRequestBodyStatusEnum `json:"status"`
}

type UpdateAssessmentControlSetStatusRequest struct {
	PathParams UpdateAssessmentControlSetStatusPathParams
	Headers    UpdateAssessmentControlSetStatusHeaders
	Request    UpdateAssessmentControlSetStatusRequestBody `request:"mediaType=application/json"`
}

type UpdateAssessmentControlSetStatusResponse struct {
	AccessDeniedException                    *interface{}
	ContentType                              string
	InternalServerException                  *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
	UpdateAssessmentControlSetStatusResponse *shared.UpdateAssessmentControlSetStatusResponse
	ValidationException                      *interface{}
}
