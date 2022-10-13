package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAcceleratorAttributesXAmzTargetEnum string

const (
	DescribeAcceleratorAttributesXAmzTargetEnumGlobalAcceleratorV20180706DescribeAcceleratorAttributes DescribeAcceleratorAttributesXAmzTargetEnum = "GlobalAccelerator_V20180706.DescribeAcceleratorAttributes"
)

type DescribeAcceleratorAttributesHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAcceleratorAttributesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAcceleratorAttributesRequest struct {
	Headers DescribeAcceleratorAttributesHeaders
	Request shared.DescribeAcceleratorAttributesRequest `request:"mediaType=application/json"`
}

type DescribeAcceleratorAttributesResponse struct {
	AcceleratorNotFoundException          *interface{}
	ContentType                           string
	DescribeAcceleratorAttributesResponse *shared.DescribeAcceleratorAttributesResponse
	InternalServiceErrorException         *interface{}
	InvalidArgumentException              *interface{}
	StatusCode                            int64
}
