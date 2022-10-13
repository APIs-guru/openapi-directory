package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeInputPathParams struct {
	InputName string `pathParam:"style=simple,explode=false,name=inputName"`
}

type DescribeInputHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeInputRequest struct {
	PathParams DescribeInputPathParams
	Headers    DescribeInputHeaders
}

type DescribeInputResponse struct {
	ContentType                 string
	DescribeInputResponse       *shared.DescribeInputResponse
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
