package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAssessmentTemplateXAmzTargetEnum string

const (
	CreateAssessmentTemplateXAmzTargetEnumInspectorServiceCreateAssessmentTemplate CreateAssessmentTemplateXAmzTargetEnum = "InspectorService.CreateAssessmentTemplate"
)

type CreateAssessmentTemplateHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAssessmentTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateAssessmentTemplateRequest struct {
	Headers CreateAssessmentTemplateHeaders
	Request shared.CreateAssessmentTemplateRequest `request:"mediaType=application/json"`
}

type CreateAssessmentTemplateResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	CreateAssessmentTemplateResponse       *shared.CreateAssessmentTemplateResponse
	InternalException                      *interface{}
	InvalidInputException                  *interface{}
	LimitExceededException                 *interface{}
	NoSuchEntityException                  *interface{}
	ServiceTemporarilyUnavailableException *interface{}
	StatusCode                             int64
}
