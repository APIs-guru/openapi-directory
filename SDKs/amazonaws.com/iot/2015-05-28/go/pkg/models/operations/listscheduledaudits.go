package operations

import (
	"openapi/pkg/models/shared"
)

type ListScheduledAuditsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListScheduledAuditsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListScheduledAuditsRequest struct {
	QueryParams ListScheduledAuditsQueryParams
	Headers     ListScheduledAuditsHeaders
}

type ListScheduledAuditsResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ListScheduledAuditsResponse *shared.ListScheduledAuditsResponse
	StatusCode                  int64
	ThrottlingException         *interface{}
}
