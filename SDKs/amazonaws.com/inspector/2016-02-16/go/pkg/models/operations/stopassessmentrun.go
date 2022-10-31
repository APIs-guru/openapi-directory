package operations

import (
	"openapi/pkg/models/shared"
)

type StopAssessmentRunXAmzTargetEnum string

const (
	StopAssessmentRunXAmzTargetEnumInspectorServiceStopAssessmentRun StopAssessmentRunXAmzTargetEnum = "InspectorService.StopAssessmentRun"
)

type StopAssessmentRunHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopAssessmentRunXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopAssessmentRunRequest struct {
	Headers StopAssessmentRunHeaders
	Request shared.StopAssessmentRunRequest `request:"mediaType=application/json"`
}

type StopAssessmentRunResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalException                      *interface{}
	InvalidInputException                  *interface{}
	NoSuchEntityException                  *interface{}
	ServiceTemporarilyUnavailableException *interface{}
	StatusCode                             int64
}
