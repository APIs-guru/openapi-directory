package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssessmentTargetsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListAssessmentTargetsXAmzTargetEnum string

const (
	ListAssessmentTargetsXAmzTargetEnumInspectorServiceListAssessmentTargets ListAssessmentTargetsXAmzTargetEnum = "InspectorService.ListAssessmentTargets"
)

type ListAssessmentTargetsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAssessmentTargetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAssessmentTargetsRequest struct {
	QueryParams ListAssessmentTargetsQueryParams
	Headers     ListAssessmentTargetsHeaders
	Request     shared.ListAssessmentTargetsRequest `request:"mediaType=application/json"`
}

type ListAssessmentTargetsResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	InternalException             *interface{}
	InvalidInputException         *interface{}
	ListAssessmentTargetsResponse *shared.ListAssessmentTargetsResponse
	StatusCode                    int64
}
