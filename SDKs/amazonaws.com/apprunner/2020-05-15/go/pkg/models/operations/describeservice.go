package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeServiceXAmzTargetEnum string

const (
	DescribeServiceXAmzTargetEnumAppRunnerDescribeService DescribeServiceXAmzTargetEnum = "AppRunner.DescribeService"
)

type DescribeServiceHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeServiceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeServiceRequest struct {
	Headers DescribeServiceHeaders
	Request shared.DescribeServiceRequest `request:"mediaType=application/json"`
}

type DescribeServiceResponse struct {
	ContentType                   string
	DescribeServiceResponse       *shared.DescribeServiceResponse
	InternalServiceErrorException *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}
