package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeVirtualClusterPathParams struct {
	VirtualClusterID string `pathParam:"style=simple,explode=false,name=virtualClusterId"`
}

type DescribeVirtualClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeVirtualClusterRequest struct {
	PathParams DescribeVirtualClusterPathParams
	Headers    DescribeVirtualClusterHeaders
}

type DescribeVirtualClusterResponse struct {
	ContentType                    string
	DescribeVirtualClusterResponse *shared.DescribeVirtualClusterResponse
	InternalServerException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
