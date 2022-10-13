package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeApplicationPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=applicationId"`
}

type DescribeApplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeApplicationRequest struct {
	PathParams DescribeApplicationPathParams
	Headers    DescribeApplicationHeaders
}

type DescribeApplicationResponse struct {
	ContentType                 string
	DescribeApplicationResponse *shared.DescribeApplicationResponse
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
