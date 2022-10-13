package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeComputeEnvironmentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeComputeEnvironmentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeComputeEnvironmentsRequestBody struct {
	ComputeEnvironments []string `json:"computeEnvironments"`
	MaxResults          *int64   `json:"maxResults"`
	NextToken           *string  `json:"nextToken"`
}

type DescribeComputeEnvironmentsRequest struct {
	QueryParams DescribeComputeEnvironmentsQueryParams
	Headers     DescribeComputeEnvironmentsHeaders
	Request     DescribeComputeEnvironmentsRequestBody `request:"mediaType=application/json"`
}

type DescribeComputeEnvironmentsResponse struct {
	ClientException                     *interface{}
	ContentType                         string
	DescribeComputeEnvironmentsResponse *shared.DescribeComputeEnvironmentsResponse
	ServerException                     *interface{}
	StatusCode                          int64
}
