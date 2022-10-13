package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDefaultAuthorizerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeDefaultAuthorizerRequest struct {
	Headers DescribeDefaultAuthorizerHeaders
}

type DescribeDefaultAuthorizerResponse struct {
	ContentType                       string
	DescribeDefaultAuthorizerResponse *shared.DescribeDefaultAuthorizerResponse
	InternalFailureException          *interface{}
	InvalidRequestException           *interface{}
	ResourceNotFoundException         *interface{}
	ServiceUnavailableException       *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	UnauthorizedException             *interface{}
}
