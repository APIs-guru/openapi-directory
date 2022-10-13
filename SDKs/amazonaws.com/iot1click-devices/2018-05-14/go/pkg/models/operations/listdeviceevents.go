package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListDeviceEventsPathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
}

type ListDeviceEventsQueryParams struct {
	FromTimeStamp time.Time `queryParam:"style=form,explode=true,name=fromTimeStamp"`
	MaxResults    *int64    `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken     *string   `queryParam:"style=form,explode=true,name=nextToken"`
	ToTimeStamp   time.Time `queryParam:"style=form,explode=true,name=toTimeStamp"`
}

type ListDeviceEventsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDeviceEventsRequest struct {
	PathParams  ListDeviceEventsPathParams
	QueryParams ListDeviceEventsQueryParams
	Headers     ListDeviceEventsHeaders
}

type ListDeviceEventsResponse struct {
	ContentType                  string
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	ListDeviceEventsResponse     *shared.ListDeviceEventsResponse
	RangeNotSatisfiableException *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
