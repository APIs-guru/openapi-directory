package operations

import (
"openapi/pkg/models/shared")

type DescribeGatewayCapabilityConfigurationPathParams struct {
    CapabilityNamespace string `pathParam:"style=simple,explode=false,name=capabilityNamespace"`
    GatewayID string `pathParam:"style=simple,explode=false,name=gatewayId"`
    
}

type DescribeGatewayCapabilityConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeGatewayCapabilityConfigurationRequest struct {
    PathParams DescribeGatewayCapabilityConfigurationPathParams 
    Headers DescribeGatewayCapabilityConfigurationHeaders 
    
}

type DescribeGatewayCapabilityConfigurationResponse struct {
    ContentType string 
    DescribeGatewayCapabilityConfigurationResponse *shared.DescribeGatewayCapabilityConfigurationResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

