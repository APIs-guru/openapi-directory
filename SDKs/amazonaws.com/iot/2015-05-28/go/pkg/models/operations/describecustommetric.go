package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCustomMetricPathParams struct {
	MetricName string `pathParam:"style=simple,explode=false,name=metricName"`
}

type DescribeCustomMetricHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeCustomMetricRequest struct {
	PathParams DescribeCustomMetricPathParams
	Headers    DescribeCustomMetricHeaders
}

type DescribeCustomMetricResponse struct {
	ContentType                  string
	DescribeCustomMetricResponse *shared.DescribeCustomMetricResponse
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
}
