package operations

import (
	"openapi/pkg/models/shared"
)

type ListSuiteRunsQueryParams struct {
	MaxResults             *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken              *string `queryParam:"style=form,explode=true,name=nextToken"`
	SuiteDefinitionID      *string `queryParam:"style=form,explode=true,name=suiteDefinitionId"`
	SuiteDefinitionVersion *string `queryParam:"style=form,explode=true,name=suiteDefinitionVersion"`
}

type ListSuiteRunsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListSuiteRunsRequest struct {
	QueryParams ListSuiteRunsQueryParams
	Headers     ListSuiteRunsHeaders
}

type ListSuiteRunsResponse struct {
	ContentType             string
	InternalServerException *interface{}
	ListSuiteRunsResponse   *shared.ListSuiteRunsResponse
	StatusCode              int64
	ValidationException     *interface{}
}
