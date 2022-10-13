package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssessmentTemplatesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListAssessmentTemplatesXAmzTargetEnum string

const (
	ListAssessmentTemplatesXAmzTargetEnumInspectorServiceListAssessmentTemplates ListAssessmentTemplatesXAmzTargetEnum = "InspectorService.ListAssessmentTemplates"
)

type ListAssessmentTemplatesHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAssessmentTemplatesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAssessmentTemplatesRequest struct {
	QueryParams ListAssessmentTemplatesQueryParams
	Headers     ListAssessmentTemplatesHeaders
	Request     shared.ListAssessmentTemplatesRequest `request:"mediaType=application/json"`
}

type ListAssessmentTemplatesResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	InternalException               *interface{}
	InvalidInputException           *interface{}
	ListAssessmentTemplatesResponse *shared.ListAssessmentTemplatesResponse
	NoSuchEntityException           *interface{}
	StatusCode                      int64
}
