package operations

import (
	"openapi/pkg/models/shared"
)

type ListStoredQueriesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListStoredQueriesXAmzTargetEnum string

const (
	ListStoredQueriesXAmzTargetEnumStarlingDoveServiceListStoredQueries ListStoredQueriesXAmzTargetEnum = "StarlingDoveService.ListStoredQueries"
)

type ListStoredQueriesHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListStoredQueriesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListStoredQueriesRequest struct {
	QueryParams ListStoredQueriesQueryParams
	Headers     ListStoredQueriesHeaders
	Request     shared.ListStoredQueriesRequest `request:"mediaType=application/json"`
}

type ListStoredQueriesResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	ListStoredQueriesResponse *shared.ListStoredQueriesResponse
	StatusCode                int64
	ValidationException       *interface{}
}
