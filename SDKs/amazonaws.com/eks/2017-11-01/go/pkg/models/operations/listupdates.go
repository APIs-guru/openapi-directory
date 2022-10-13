package operations

import (
	"openapi/pkg/models/shared"
)

type ListUpdatesPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ListUpdatesQueryParams struct {
	AddonName     *string `queryParam:"style=form,explode=true,name=addonName"`
	MaxResults    *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken     *string `queryParam:"style=form,explode=true,name=nextToken"`
	NodegroupName *string `queryParam:"style=form,explode=true,name=nodegroupName"`
}

type ListUpdatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListUpdatesRequest struct {
	PathParams  ListUpdatesPathParams
	QueryParams ListUpdatesQueryParams
	Headers     ListUpdatesHeaders
}

type ListUpdatesResponse struct {
	ClientException           *interface{}
	ContentType               string
	InvalidParameterException *interface{}
	ListUpdatesResponse       *shared.ListUpdatesResponse
	ResourceNotFoundException *interface{}
	ServerException           *interface{}
	StatusCode                int64
}
