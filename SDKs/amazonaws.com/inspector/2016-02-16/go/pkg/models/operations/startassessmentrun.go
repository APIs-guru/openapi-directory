package operations

import (
	"openapi/pkg/models/shared"
)

type StartAssessmentRunXAmzTargetEnum string

const (
	StartAssessmentRunXAmzTargetEnumInspectorServiceStartAssessmentRun StartAssessmentRunXAmzTargetEnum = "InspectorService.StartAssessmentRun"
)

type StartAssessmentRunHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartAssessmentRunXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartAssessmentRunRequest struct {
	Headers StartAssessmentRunHeaders
	Request shared.StartAssessmentRunRequest `request:"mediaType=application/json"`
}

type StartAssessmentRunResponse struct {
	AccessDeniedException                   *interface{}
	AgentsAlreadyRunningAssessmentException *interface{}
	ContentType                             string
	InternalException                       *interface{}
	InvalidCrossAccountRoleException        *interface{}
	InvalidInputException                   *interface{}
	LimitExceededException                  *interface{}
	NoSuchEntityException                   *interface{}
	ServiceTemporarilyUnavailableException  *interface{}
	StartAssessmentRunResponse              *shared.StartAssessmentRunResponse
	StatusCode                              int64
}
