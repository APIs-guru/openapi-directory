package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssessmentRunAgentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListAssessmentRunAgentsXAmzTargetEnum string

const (
	ListAssessmentRunAgentsXAmzTargetEnumInspectorServiceListAssessmentRunAgents ListAssessmentRunAgentsXAmzTargetEnum = "InspectorService.ListAssessmentRunAgents"
)

type ListAssessmentRunAgentsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAssessmentRunAgentsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAssessmentRunAgentsRequest struct {
	QueryParams ListAssessmentRunAgentsQueryParams
	Headers     ListAssessmentRunAgentsHeaders
	Request     shared.ListAssessmentRunAgentsRequest `request:"mediaType=application/json"`
}

type ListAssessmentRunAgentsResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	InternalException               *interface{}
	InvalidInputException           *interface{}
	ListAssessmentRunAgentsResponse *shared.ListAssessmentRunAgentsResponse
	NoSuchEntityException           *interface{}
	StatusCode                      int64
}
