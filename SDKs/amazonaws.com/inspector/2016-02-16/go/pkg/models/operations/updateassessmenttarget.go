package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAssessmentTargetXAmzTargetEnum string

const (
	UpdateAssessmentTargetXAmzTargetEnumInspectorServiceUpdateAssessmentTarget UpdateAssessmentTargetXAmzTargetEnum = "InspectorService.UpdateAssessmentTarget"
)

type UpdateAssessmentTargetHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAssessmentTargetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateAssessmentTargetRequest struct {
	Headers UpdateAssessmentTargetHeaders
	Request shared.UpdateAssessmentTargetRequest `request:"mediaType=application/json"`
}

type UpdateAssessmentTargetResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalException                      *interface{}
	InvalidInputException                  *interface{}
	NoSuchEntityException                  *interface{}
	ServiceTemporarilyUnavailableException *interface{}
	StatusCode                             int64
}
