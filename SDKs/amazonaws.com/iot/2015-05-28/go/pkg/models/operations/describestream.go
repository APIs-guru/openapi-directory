package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStreamPathParams struct {
	StreamID string `pathParam:"style=simple,explode=false,name=streamId"`
}

type DescribeStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeStreamRequest struct {
	PathParams DescribeStreamPathParams
	Headers    DescribeStreamHeaders
}

type DescribeStreamResponse struct {
	ContentType                 string
	DescribeStreamResponse      *shared.DescribeStreamResponse
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
