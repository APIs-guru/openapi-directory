package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAssessmentFrameworkHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateAssessmentFrameworkRequestBody struct {
	ComplianceType *string                                      `json:"complianceType,omitempty"`
	ControlSets    []shared.CreateAssessmentFrameworkControlSet `json:"controlSets"`
	Description    *string                                      `json:"description,omitempty"`
	Name           string                                       `json:"name"`
	Tags           map[string]string                            `json:"tags,omitempty"`
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
