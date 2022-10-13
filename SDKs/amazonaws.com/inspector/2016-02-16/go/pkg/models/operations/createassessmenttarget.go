package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAssessmentTargetXAmzTargetEnum string

const (
	CreateAssessmentTargetXAmzTargetEnumInspectorServiceCreateAssessmentTarget CreateAssessmentTargetXAmzTargetEnum = "InspectorService.CreateAssessmentTarget"
)

type CreateAssessmentTargetHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAssessmentTargetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateAssessmentTargetRequest struct {
	Headers CreateAssessmentTargetHeaders
	Request shared.CreateAssessmentTargetRequest `request:"mediaType=application/json"`
}

type CreateAssessmentTargetResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	CreateAssessmentTargetResponse         *shared.CreateAssessmentTargetResponse
	InternalException                      *interface{}
	InvalidCrossAccountRoleException       *interface{}
	InvalidInputException                  *interface{}
	LimitExceededException                 *interface{}
	NoSuchEntityException                  *interface{}
	ServiceTemporarilyUnavailableException *interface{}
	StatusCode                             int64
}
