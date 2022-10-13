package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeComponentPathParams struct {
	Arn string `pathParam:"style=simple,explode=false,name=arn"`
}

type DescribeComponentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeComponentRequest struct {
	PathParams DescribeComponentPathParams
	Headers    DescribeComponentHeaders
}

type DescribeComponentResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeComponentResponse *shared.DescribeComponentResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
