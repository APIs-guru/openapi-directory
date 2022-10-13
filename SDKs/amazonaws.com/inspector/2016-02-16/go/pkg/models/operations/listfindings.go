package operations

import (
	"openapi/pkg/models/shared"
)

type ListFindingsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListFindingsXAmzTargetEnum string

const (
	ListFindingsXAmzTargetEnumInspectorServiceListFindings ListFindingsXAmzTargetEnum = "InspectorService.ListFindings"
)

type ListFindingsHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFindingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListFindingsRequest struct {
	QueryParams ListFindingsQueryParams
	Headers     ListFindingsHeaders
	Request     shared.ListFindingsRequest `request:"mediaType=application/json"`
}

type ListFindingsResponse struct {
	AccessDeniedException *interface{}
	ContentType           string
	InternalException     *interface{}
	InvalidInputException *interface{}
	ListFindingsResponse  *shared.ListFindingsResponse
	NoSuchEntityException *interface{}
	StatusCode            int64
}
