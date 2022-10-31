package operations

import (
"openapi/pkg/models/shared")


type DescribeEndpointGroupXAmzTargetEnum string

const (
    DescribeEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706DescribeEndpointGroup DescribeEndpointGroupXAmzTargetEnum = "GlobalAccelerator_V20180706.DescribeEndpointGroup"
)


type DescribeEndpointGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeEndpointGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeEndpointGroupRequest struct {
    Headers DescribeEndpointGroupHeaders 
    Request shared.DescribeEndpointGroupRequest `request:"mediaType=application/json"`
    
}

type DescribeEndpointGroupResponse struct {
    ContentType string 
    DescribeEndpointGroupResponse *shared.DescribeEndpointGroupResponse 
    EndpointGroupNotFoundException *interface{} 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    StatusCode int64 
    
}

