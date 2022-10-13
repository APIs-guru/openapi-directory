package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeServiceIntegrationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeServiceIntegrationRequest struct {
	Headers DescribeServiceIntegrationHeaders
}

type DescribeServiceIntegrationResponse struct {
	AccessDeniedException              *interface{}
	ContentType                        string
	DescribeServiceIntegrationResponse *shared.DescribeServiceIntegrationResponse
	InternalServerException            *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
	ValidationException                *interface{}
}
