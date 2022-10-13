package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEndpointXAmzTargetEnum string

const (
	DescribeEndpointXAmzTargetEnumComprehend20171127DescribeEndpoint DescribeEndpointXAmzTargetEnum = "Comprehend_20171127.DescribeEndpoint"
)

type DescribeEndpointHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEndpointXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEndpointRequest struct {
	Headers DescribeEndpointHeaders
	Request shared.DescribeEndpointRequest `request:"mediaType=application/json"`
}

type DescribeEndpointResponse struct {
	ContentType               string
	DescribeEndpointResponse  *shared.DescribeEndpointResponse
	InternalServerException   *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
