package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type SampleChannelDataPathParams struct {
	ChannelName string `pathParam:"style=simple,explode=false,name=channelName"`
}

type SampleChannelDataQueryParams struct {
	EndTime     *time.Time `queryParam:"style=form,explode=true,name=endTime"`
	MaxMessages *int64     `queryParam:"style=form,explode=true,name=maxMessages"`
	StartTime   *time.Time `queryParam:"style=form,explode=true,name=startTime"`
}

type SampleChannelDataHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type SampleChannelDataRequest struct {
	PathParams  SampleChannelDataPathParams
	QueryParams SampleChannelDataQueryParams
	Headers     SampleChannelDataHeaders
}

type SampleChannelDataResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	SampleChannelDataResponse   *shared.SampleChannelDataResponse
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
