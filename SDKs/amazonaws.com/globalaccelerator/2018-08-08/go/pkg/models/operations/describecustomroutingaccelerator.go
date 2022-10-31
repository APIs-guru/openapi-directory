package operations

import (
"openapi/pkg/models/shared")


type DescribeCustomRoutingAcceleratorXAmzTargetEnum string

const (
    DescribeCustomRoutingAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706DescribeCustomRoutingAccelerator DescribeCustomRoutingAcceleratorXAmzTargetEnum = "GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator"
)


type DescribeCustomRoutingAcceleratorHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeCustomRoutingAcceleratorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeCustomRoutingAcceleratorRequest struct {
    Headers DescribeCustomRoutingAcceleratorHeaders 
    Request shared.DescribeCustomRoutingAcceleratorRequest `request:"mediaType=application/json"`
    
}

type DescribeCustomRoutingAcceleratorResponse struct {
    AcceleratorNotFoundException *interface{} 
    ContentType string 
    DescribeCustomRoutingAcceleratorResponse *shared.DescribeCustomRoutingAcceleratorResponse 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    StatusCode int64 
    
}

