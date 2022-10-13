package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeClusterPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DescribeClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeClusterRequest struct {
	PathParams DescribeClusterPathParams
	Headers    DescribeClusterHeaders
}

type DescribeClusterResponse struct {
	ClientException             *interface{}
	ContentType                 string
	DescribeClusterResponse     *shared.DescribeClusterResponse
	ResourceNotFoundException   *interface{}
	ServerException             *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
