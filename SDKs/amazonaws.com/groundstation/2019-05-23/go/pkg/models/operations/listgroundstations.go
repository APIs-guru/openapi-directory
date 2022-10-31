package operations

import (
	"openapi/pkg/models/shared"
)

type ListGroundStationsQueryParams struct {
	MaxResults  *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken   *string `queryParam:"style=form,explode=true,name=nextToken"`
	SatelliteID *string `queryParam:"style=form,explode=true,name=satelliteId"`
}

type ListGroundStationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListGroundStationsRequest struct {
	QueryParams ListGroundStationsQueryParams
	Headers     ListGroundStationsHeaders
}

type ListGroundStationsResponse struct {
	ContentType                string
	DependencyException        *interface{}
	InvalidParameterException  *interface{}
	ListGroundStationsResponse *shared.ListGroundStationsResponse
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
