package operations

import (
	"openapi/pkg/models/shared"
)

type SearchIndexHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type SearchIndexRequestBody struct {
	IndexName    *string `json:"indexName,omitempty"`
	MaxResults   *int64  `json:"maxResults,omitempty"`
	NextToken    *string `json:"nextToken,omitempty"`
	QueryString  string  `json:"queryString"`
	QueryVersion *string `json:"queryVersion,omitempty"`
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
