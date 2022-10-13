package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssessmentReportXAmzTargetEnum string

const (
	GetAssessmentReportXAmzTargetEnumInspectorServiceGetAssessmentReport GetAssessmentReportXAmzTargetEnum = "InspectorService.GetAssessmentReport"
)

type GetAssessmentReportHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAssessmentReportXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAssessmentReportRequest struct {
	Headers GetAssessmentReportHeaders
	Request shared.GetAssessmentReportRequest `request:"mediaType=application/json"`
}

type GetAssessmentReportResponse struct {
	AccessDeniedException                  *interface{}
	AssessmentRunInProgressException       *interface{}
	ContentType                            string
	GetAssessmentReportResponse            *shared.GetAssessmentReportResponse
	InternalException                      *interface{}
	InvalidInputException                  *interface{}
	NoSuchEntityException                  *interface{}
	ServiceTemporarilyUnavailableException *interface{}
	StatusCode                             int64
	UnsupportedFeatureException            *interface{}
}
