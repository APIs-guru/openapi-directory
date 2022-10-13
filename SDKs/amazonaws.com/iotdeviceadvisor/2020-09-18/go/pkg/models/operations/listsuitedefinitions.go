package operations

import (
	"openapi/pkg/models/shared"
)

type ListSuiteDefinitionsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListSuiteDefinitionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListSuiteDefinitionsRequest struct {
	QueryParams ListSuiteDefinitionsQueryParams
	Headers     ListSuiteDefinitionsHeaders
}

type ListSuiteDefinitionsResponse struct {
	ContentType                  string
	InternalServerException      *interface{}
	ListSuiteDefinitionsResponse *shared.ListSuiteDefinitionsResponse
	StatusCode                   int64
	ValidationException          *interface{}
}
