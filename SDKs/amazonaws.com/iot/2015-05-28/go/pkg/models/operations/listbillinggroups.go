package operations

import (
	"openapi/pkg/models/shared"
)

type ListBillingGroupsQueryParams struct {
	MaxResults       *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NamePrefixFilter *string `queryParam:"style=form,explode=true,name=namePrefixFilter"`
	NextToken        *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListBillingGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListBillingGroupsRequest struct {
	QueryParams ListBillingGroupsQueryParams
	Headers     ListBillingGroupsHeaders
}

type ListBillingGroupsResponse struct {
	ContentType               string
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ListBillingGroupsResponse *shared.ListBillingGroupsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
