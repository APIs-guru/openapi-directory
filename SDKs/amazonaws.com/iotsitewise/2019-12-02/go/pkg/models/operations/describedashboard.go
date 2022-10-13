package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDashboardPathParams struct {
	DashboardID string `pathParam:"style=simple,explode=false,name=dashboardId"`
}

type DescribeDashboardHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeDashboardRequest struct {
	PathParams DescribeDashboardPathParams
	Headers    DescribeDashboardHeaders
}

type DescribeDashboardResponse struct {
	ContentType               string
	DescribeDashboardResponse *shared.DescribeDashboardResponse
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
