package operations

import (
	"openapi/pkg/models/shared"
)

type ListDevicesQueryParams struct {
	DeviceType *string `queryParam:"style=form,explode=true,name=deviceType"`
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListDevicesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDevicesRequest struct {
	QueryParams ListDevicesQueryParams
	Headers     ListDevicesHeaders
}

type ListDevicesResponse struct {
	ContentType                  string
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	ListDevicesResponse          *shared.ListDevicesResponse
	RangeNotSatisfiableException *interface{}
	StatusCode                   int64
}
