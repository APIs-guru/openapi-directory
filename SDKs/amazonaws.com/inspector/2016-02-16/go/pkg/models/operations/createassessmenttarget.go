package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAssessmentTargetXAmzTargetEnum string

const (
	CreateAssessmentTargetXAmzTargetEnumInspectorServiceCreateAssessmentTarget CreateAssessmentTargetXAmzTargetEnum = "InspectorService.CreateAssessmentTarget"
)

type CreateAssessmentTargetHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAssessmentTargetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
