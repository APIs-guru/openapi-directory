package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetProfilePathParams struct {
	ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
}

type GetProfileQueryParams struct {
	EndTime   *time.Time `queryParam:"style=form,explode=true,name=endTime"`
	MaxDepth  *int64     `queryParam:"style=form,explode=true,name=maxDepth"`
	Period    *string    `queryParam:"style=form,explode=true,name=period"`
	StartTime *time.Time `queryParam:"style=form,explode=true,name=startTime"`
}

type GetProfileHeaders struct {
	Accept            *string `header:"style=simple,explode=false,name=Accept"`
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetProfileRequest struct {
	PathParams  GetProfilePathParams
	QueryParams GetProfileQueryParams
	Headers     GetProfileHeaders
}

type GetProfileResponse struct {
	ContentType               string
	GetProfileResponse        *shared.GetProfileResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
