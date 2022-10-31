package operations

import (
"openapi/pkg/models/shared")


type DescribeDeliveryChannelStatusXAmzTargetEnum string

const (
    DescribeDeliveryChannelStatusXAmzTargetEnumStarlingDoveServiceDescribeDeliveryChannelStatus DescribeDeliveryChannelStatusXAmzTargetEnum = "StarlingDoveService.DescribeDeliveryChannelStatus"
)


type DescribeDeliveryChannelStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeDeliveryChannelStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeDeliveryChannelStatusRequest struct {
    Headers DescribeDeliveryChannelStatusHeaders 
    Request shared.DescribeDeliveryChannelStatusRequest `request:"mediaType=application/json"`
    
}

type DescribeDeliveryChannelStatusResponse struct {
    ContentType string 
    DescribeDeliveryChannelStatusResponse *shared.DescribeDeliveryChannelStatusResponse 
    NoSuchDeliveryChannelException *interface{} 
    StatusCode int64 
    
}

