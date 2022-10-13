package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAssessmentRunXAmzTargetEnum string

const (
	DeleteAssessmentRunXAmzTargetEnumInspectorServiceDeleteAssessmentRun DeleteAssessmentRunXAmzTargetEnum = "InspectorService.DeleteAssessmentRun"
)

type DeleteAssessmentRunHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAssessmentRunXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteAssessmentRunRequest struct {
	Headers DeleteAssessmentRunHeaders
	Request shared.DeleteAssessmentRunRequest `request:"mediaType=application/json"`
}

type DeleteAssessmentRunResponse struct {
	AccessDeniedException                  *interface{}
	AssessmentRunInProgressException       *interface{}
	ContentType                            string
	InternalException                      *interface{}
	InvalidInputException                  *interface{}
	NoSuchEntityException                  *interface{}
	ServiceTemporarilyUnavailableException *interface{}
	StatusCode                             int64
}
