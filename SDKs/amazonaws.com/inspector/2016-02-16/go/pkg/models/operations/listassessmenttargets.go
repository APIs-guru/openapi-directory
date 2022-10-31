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
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAssessmentTargetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
