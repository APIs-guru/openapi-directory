package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAssessmentPathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
}

type UpdateAssessmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateAssessmentRequestBodyAssessmentReportsDestination struct {
	Destination     *string                                     `json:"destination"`
	DestinationType *shared.AssessmentReportDestinationTypeEnum `json:"destinationType"`
}

type UpdateAssessmentRequestBodyScope struct {
	AwsAccounts []shared.AwsAccount `json:"awsAccounts"`
	AwsServices []shared.AwsService `json:"awsServices"`
}

type UpdateAssessmentRequestBody struct {
	AssessmentDescription        *string                                                  `json:"assessmentDescription"`
	AssessmentName               *string                                                  `json:"assessmentName"`
	AssessmentReportsDestination *UpdateAssessmentRequestBodyAssessmentReportsDestination `json:"assessmentReportsDestination"`
	Roles                        []shared.Role                                            `json:"roles"`
	Scope                        UpdateAssessmentRequestBodyScope                         `json:"scope"`
}

type UpdateAssessmentRequest struct {
	PathParams UpdateAssessmentPathParams
	Headers    UpdateAssessmentHeaders
	Request    UpdateAssessmentRequestBody `request:"mediaType=application/json"`
}

type UpdateAssessmentResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateAssessmentResponse  *shared.UpdateAssessmentResponse
	ValidationException       *interface{}
}
