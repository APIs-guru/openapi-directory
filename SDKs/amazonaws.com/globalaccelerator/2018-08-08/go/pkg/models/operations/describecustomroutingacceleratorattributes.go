package operations

import (
"openapi/pkg/models/shared")


type DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum string

const (
    DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnumGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributes DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum = "GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes"
)


type DescribeCustomRoutingAcceleratorAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeCustomRoutingAcceleratorAttributesRequest struct {
    Headers DescribeCustomRoutingAcceleratorAttributesHeaders 
    Request shared.DescribeCustomRoutingAcceleratorAttributesRequest `request:"mediaType=application/json"`
    
}

type DescribeCustomRoutingAcceleratorAttributesResponse struct {
    AcceleratorNotFoundException *interface{} 
    ContentType string 
    DescribeCustomRoutingAcceleratorAttributesResponse *shared.DescribeCustomRoutingAcceleratorAttributesResponse 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    StatusCode int64 
    
}

