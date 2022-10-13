package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEndpointGroupXAmzTargetEnum string

const (
	DescribeEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706DescribeEndpointGroup DescribeEndpointGroupXAmzTargetEnum = "GlobalAccelerator_V20180706.DescribeEndpointGroup"
)

type DescribeEndpointGroupHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEndpointGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEndpointGroupRequest struct {
	Headers DescribeEndpointGroupHeaders
	Request shared.DescribeEndpointGroupRequest `request:"mediaType=application/json"`
}

type DescribeEndpointGroupResponse struct {
	ContentType                    string
	DescribeEndpointGroupResponse  *shared.DescribeEndpointGroupResponse
	EndpointGroupNotFoundException *interface{}
	InternalServiceErrorException  *interface{}
	InvalidArgumentException       *interface{}
	StatusCode                     int64
}
