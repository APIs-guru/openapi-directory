package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAcceleratorXAmzTargetEnum string

const (
	DescribeAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706DescribeAccelerator DescribeAcceleratorXAmzTargetEnum = "GlobalAccelerator_V20180706.DescribeAccelerator"
)

type DescribeAcceleratorHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAcceleratorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAcceleratorRequest struct {
	Headers DescribeAcceleratorHeaders
	Request shared.DescribeAcceleratorRequest `request:"mediaType=application/json"`
}

type DescribeAcceleratorResponse struct {
	AcceleratorNotFoundException  *interface{}
	ContentType                   string
	DescribeAcceleratorResponse   *shared.DescribeAcceleratorResponse
	InternalServiceErrorException *interface{}
	InvalidArgumentException      *interface{}
	StatusCode                    int64
}
