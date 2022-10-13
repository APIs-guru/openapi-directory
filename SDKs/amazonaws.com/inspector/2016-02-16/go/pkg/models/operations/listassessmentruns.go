package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssessmentRunsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListAssessmentRunsXAmzTargetEnum string

const (
	ListAssessmentRunsXAmzTargetEnumInspectorServiceListAssessmentRuns ListAssessmentRunsXAmzTargetEnum = "InspectorService.ListAssessmentRuns"
)

type ListAssessmentRunsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAssessmentRunsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAssessmentRunsRequest struct {
	QueryParams ListAssessmentRunsQueryParams
	Headers     ListAssessmentRunsHeaders
	Request     shared.ListAssessmentRunsRequest `request:"mediaType=application/json"`
}

type ListAssessmentRunsResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	InternalException          *interface{}
	InvalidInputException      *interface{}
	ListAssessmentRunsResponse *shared.ListAssessmentRunsResponse
	NoSuchEntityException      *interface{}
	StatusCode                 int64
}
