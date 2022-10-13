package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAssessmentFrameworkHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAssessmentFrameworkRequestBody struct {
	ComplianceType *string                                      `json:"complianceType"`
	ControlSets    []shared.CreateAssessmentFrameworkControlSet `json:"controlSets"`
	Description    *string                                      `json:"description"`
	Name           string                                       `json:"name"`
	Tags           map[string]string                            `json:"tags"`
}

type CreateAssessmentFrameworkRequest struct {
	Headers CreateAssessmentFrameworkHeaders
	Request CreateAssessmentFrameworkRequestBody `request:"mediaType=application/json"`
}

type CreateAssessmentFrameworkResponse struct {
	AccessDeniedException             *interface{}
	ContentType                       string
	CreateAssessmentFrameworkResponse *shared.CreateAssessmentFrameworkResponse
	InternalServerException           *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	ValidationException               *interface{}
}
