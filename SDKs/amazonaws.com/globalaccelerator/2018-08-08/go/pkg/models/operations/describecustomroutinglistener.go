package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCustomRoutingListenerXAmzTargetEnum string

const (
	DescribeCustomRoutingListenerXAmzTargetEnumGlobalAcceleratorV20180706DescribeCustomRoutingListener DescribeCustomRoutingListenerXAmzTargetEnum = "GlobalAccelerator_V20180706.DescribeCustomRoutingListener"
)

type DescribeCustomRoutingListenerHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCustomRoutingListenerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeCustomRoutingListenerRequest struct {
	Headers DescribeCustomRoutingListenerHeaders
	Request shared.DescribeCustomRoutingListenerRequest `request:"mediaType=application/json"`
}

type DescribeCustomRoutingListenerResponse struct {
	ContentType                           string
	DescribeCustomRoutingListenerResponse *shared.DescribeCustomRoutingListenerResponse
	InternalServiceErrorException         *interface{}
	InvalidArgumentException              *interface{}
	ListenerNotFoundException             *interface{}
	StatusCode                            int64
}
