package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListManagedEndpointsPathParams struct {
	VirtualClusterID string `pathParam:"style=simple,explode=false,name=virtualClusterId"`
}

type ListManagedEndpointsQueryParams struct {
	CreatedAfter  *time.Time                 `queryParam:"style=form,explode=true,name=createdAfter"`
	CreatedBefore *time.Time                 `queryParam:"style=form,explode=true,name=createdBefore"`
	MaxResults    *int64                     `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken     *string                    `queryParam:"style=form,explode=true,name=nextToken"`
	States        []shared.EndpointStateEnum `queryParam:"style=form,explode=true,name=states"`
	Types         []string                   `queryParam:"style=form,explode=true,name=types"`
}

type ListManagedEndpointsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListManagedEndpointsRequest struct {
	PathParams  ListManagedEndpointsPathParams
	QueryParams ListManagedEndpointsQueryParams
	Headers     ListManagedEndpointsHeaders
}

type ListManagedEndpointsResponse struct {
	ContentType                  string
	InternalServerException      *interface{}
	ListManagedEndpointsResponse *shared.ListManagedEndpointsResponse
	StatusCode                   int64
	ValidationException          *interface{}
}
