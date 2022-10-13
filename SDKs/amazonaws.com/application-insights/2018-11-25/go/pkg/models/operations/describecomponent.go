package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeComponentXAmzTargetEnum string

const (
	DescribeComponentXAmzTargetEnumEc2WindowsBarleyServiceDescribeComponent DescribeComponentXAmzTargetEnum = "EC2WindowsBarleyService.DescribeComponent"
)

type DescribeComponentHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeComponentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeComponentRequest struct {
	Headers DescribeComponentHeaders
	Request shared.DescribeComponentRequest `request:"mediaType=application/json"`
}

type DescribeComponentResponse struct {
	ContentType               string
	DescribeComponentResponse *shared.DescribeComponentResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
