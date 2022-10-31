package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeJobPathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type DescribeJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeJobRequest struct {
	PathParams DescribeJobPathParams
	Headers    DescribeJobHeaders
}

type DescribeJobResponse struct {
	ContentType                 string
	DescribeJobResponse         *shared.DescribeJobResponse
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
