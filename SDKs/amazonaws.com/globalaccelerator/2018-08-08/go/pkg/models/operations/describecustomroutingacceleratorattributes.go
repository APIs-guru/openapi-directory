package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum string

const (
	DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnumGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributes DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum = "GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes"
)

type DescribeCustomRoutingAcceleratorAttributesHeaders struct {
	XAmzAlgorithm     *string                                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeCustomRoutingAcceleratorAttributesRequest struct {
	Headers DescribeCustomRoutingAcceleratorAttributesHeaders
	Request shared.DescribeCustomRoutingAcceleratorAttributesRequest `request:"mediaType=application/json"`
}

type DescribeCustomRoutingAcceleratorAttributesResponse struct {
	AcceleratorNotFoundException                       *interface{}
	ContentType                                        string
	DescribeCustomRoutingAcceleratorAttributesResponse *shared.DescribeCustomRoutingAcceleratorAttributesResponse
	InternalServiceErrorException                      *interface{}
	InvalidArgumentException                           *interface{}
	StatusCode                                         int64
}
