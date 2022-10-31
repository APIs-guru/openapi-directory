package operations

import (
"openapi/pkg/models/shared")


type DescribeVirtualGatewaysXAmzTargetEnum string

const (
    DescribeVirtualGatewaysXAmzTargetEnumOvertureServiceDescribeVirtualGateways DescribeVirtualGatewaysXAmzTargetEnum = "OvertureService.DescribeVirtualGateways"
)


type DescribeVirtualGatewaysHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeVirtualGatewaysXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeVirtualGatewaysRequest struct {
    Headers DescribeVirtualGatewaysHeaders 
    
}

type DescribeVirtualGatewaysResponse struct {
    ContentType string 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    VirtualGateways *shared.VirtualGateways 
    
}

