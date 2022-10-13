package operations

import (
	"openapi/pkg/models/shared"
)

type SearchIndexHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SearchIndexRequestBody struct {
	IndexName    *string `json:"indexName"`
	MaxResults   *int64  `json:"maxResults"`
	NextToken    *string `json:"nextToken"`
	QueryString  string  `json:"queryString"`
	QueryVersion *string `json:"queryVersion"`
}

type SearchIndexRequest struct {
	Headers SearchIndexHeaders
	Request SearchIndexRequestBody `request:"mediaType=application/json"`
}

type SearchIndexResponse struct {
	ContentType                 string
	IndexNotReadyException      *interface{}
	InternalFailureException    *interface{}
	InvalidQueryException       *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	SearchIndexResponse         *shared.SearchIndexResponse
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
