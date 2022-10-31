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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
