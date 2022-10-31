package operations

import (
"openapi/pkg/models/shared")


type DescribeCustomRoutingEndpointGroupXAmzTargetEnum string

const (
    DescribeCustomRoutingEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroup DescribeCustomRoutingEndpointGroupXAmzTargetEnum = "GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup"
)


type DescribeCustomRoutingEndpointGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeCustomRoutingEndpointGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeCustomRoutingEndpointGroupRequest struct {
    Headers DescribeCustomRoutingEndpointGroupHeaders 
    Request shared.DescribeCustomRoutingEndpointGroupRequest `request:"mediaType=application/json"`
    
}

type DescribeCustomRoutingEndpointGroupResponse struct {
    ContentType string 
    DescribeCustomRoutingEndpointGroupResponse *shared.DescribeCustomRoutingEndpointGroupResponse 
    EndpointGroupNotFoundException *interface{} 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    StatusCode int64 
    
}

