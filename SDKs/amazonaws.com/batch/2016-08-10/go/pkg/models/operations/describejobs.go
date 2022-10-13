package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeJobsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeJobsRequestBody struct {
	Jobs []string `json:"jobs"`
}

type DescribeJobsRequest struct {
	Headers DescribeJobsHeaders
	Request DescribeJobsRequestBody `request:"mediaType=application/json"`
}

type DescribeJobsResponse struct {
	ClientException      *interface{}
	ContentType          string
	DescribeJobsResponse *shared.DescribeJobsResponse
	ServerException      *interface{}
	StatusCode           int64
}
