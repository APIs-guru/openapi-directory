package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeIndexPathParams struct {
	IndexName string `pathParam:"style=simple,explode=false,name=indexName"`
}

type DescribeIndexHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeIndexRequest struct {
	PathParams DescribeIndexPathParams
	Headers    DescribeIndexHeaders
}

type DescribeIndexResponse struct {
	ContentType                 string
	DescribeIndexResponse       *shared.DescribeIndexResponse
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
