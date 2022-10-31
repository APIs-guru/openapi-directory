package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAssessmentPathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
}

type UpdateAssessmentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateAssessmentRequestBodyAssessmentReportsDestination struct {
	Destination     *string                                     `json:"destination,omitempty"`
	DestinationType *shared.AssessmentReportDestinationTypeEnum `json:"destinationType,omitempty"`
}

type UpdateAssessmentRequestBodyScope struct {
	AwsAccounts []shared.AwsAccount `json:"awsAccounts,omitempty"`
	AwsServices []shared.AwsService `json:"awsServices,omitempty"`
}

type UpdateAssessmentRequestBody struct {
	AssessmentDescription        *string                                                  `json:"assessmentDescription,omitempty"`
	AssessmentName               *string                                                  `json:"assessmentName,omitempty"`
	AssessmentReportsDestination *UpdateAssessmentRequestBodyAssessmentReportsDestination `json:"assessmentReportsDestination,omitempty"`
	Roles                        []shared.Role                                            `json:"roles,omitempty"`
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
