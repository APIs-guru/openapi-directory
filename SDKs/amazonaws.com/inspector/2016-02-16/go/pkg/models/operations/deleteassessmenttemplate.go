package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAssessmentTemplateXAmzTargetEnum string

const (
	DeleteAssessmentTemplateXAmzTargetEnumInspectorServiceDeleteAssessmentTemplate DeleteAssessmentTemplateXAmzTargetEnum = "InspectorService.DeleteAssessmentTemplate"
)

type DeleteAssessmentTemplateHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAssessmentTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteAssessmentTemplateRequest struct {
	Headers DeleteAssessmentTemplateHeaders
	Request shared.DeleteAssessmentTemplateRequest `request:"mediaType=application/json"`
}

type DeleteAssessmentTemplateResponse struct {
	AccessDeniedException                  *interface{}
	AssessmentRunInProgressException       *interface{}
	ContentType                            string
	InternalException                      *interface{}
	InvalidInputException                  *interface{}
	NoSuchEntityException                  *interface{}
	ServiceTemporarilyUnavailableException *interface{}
	StatusCode                             int64
}
