package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAssessmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAssessmentRequestBodyAssessmentReportsDestination struct {
	Destination     *string                                     `json:"destination"`
	DestinationType *shared.AssessmentReportDestinationTypeEnum `json:"destinationType"`
}

type CreateAssessmentRequestBodyScope struct {
	AwsAccounts []shared.AwsAccount `json:"awsAccounts"`
	AwsServices []shared.AwsService `json:"awsServices"`
}

type CreateAssessmentRequestBody struct {
	AssessmentReportsDestination CreateAssessmentRequestBodyAssessmentReportsDestination `json:"assessmentReportsDestination"`
	Description                  *string                                                 `json:"description"`
	FrameworkID                  string                                                  `json:"frameworkId"`
	Name                         string                                                  `json:"name"`
	Roles                        []shared.Role                                           `json:"roles"`
	Scope                        CreateAssessmentRequestBodyScope                        `json:"scope"`
	Tags                         map[string]string                                       `json:"tags"`
}

type CreateAssessmentRequest struct {
	Headers CreateAssessmentHeaders
	Request CreateAssessmentRequestBody `request:"mediaType=application/json"`
}

type CreateAssessmentResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	CreateAssessmentResponse  *shared.CreateAssessmentResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
