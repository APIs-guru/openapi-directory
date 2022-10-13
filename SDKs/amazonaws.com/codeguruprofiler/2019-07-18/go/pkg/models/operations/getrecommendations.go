package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetRecommendationsPathParams struct {
	ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
}

type GetRecommendationsQueryParams struct {
	EndTime   time.Time `queryParam:"style=form,explode=true,name=endTime"`
	Locale    *string   `queryParam:"style=form,explode=true,name=locale"`
	StartTime time.Time `queryParam:"style=form,explode=true,name=startTime"`
}

type GetRecommendationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRecommendationsRequest struct {
	PathParams  GetRecommendationsPathParams
	QueryParams GetRecommendationsQueryParams
	Headers     GetRecommendationsHeaders
}

type GetRecommendationsResponse struct {
	ContentType                string
	GetRecommendationsResponse *shared.GetRecommendationsResponse
	InternalServerException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
