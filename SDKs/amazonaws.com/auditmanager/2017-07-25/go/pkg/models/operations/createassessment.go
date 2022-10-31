package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAssessmentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateAssessmentRequestBodyAssessmentReportsDestination struct {
	Destination     *string                                     `json:"destination,omitempty"`
	DestinationType *shared.AssessmentReportDestinationTypeEnum `json:"destinationType,omitempty"`
}

type CreateAssessmentRequestBodyScope struct {
	AwsAccounts []shared.AwsAccount `json:"awsAccounts,omitempty"`
	AwsServices []shared.AwsService `json:"awsServices,omitempty"`
}

type CreateAssessmentRequestBody struct {
	AssessmentReportsDestination CreateAssessmentRequestBodyAssessmentReportsDestination `json:"assessmentReportsDestination"`
	Description                  *string                                                 `json:"description,omitempty"`
	FrameworkID                  string                                                  `json:"frameworkId"`
	Name                         string                                                  `json:"name"`
	Roles                        []shared.Role                                           `json:"roles"`
	Scope                        CreateAssessmentRequestBodyScope                        `json:"scope"`
	Tags                         map[string]string                                       `json:"tags,omitempty"`
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
