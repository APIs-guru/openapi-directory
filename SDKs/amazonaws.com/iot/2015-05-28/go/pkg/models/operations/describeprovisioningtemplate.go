package operations

import (
"openapi/pkg/models/shared")

type DescribeProvisioningTemplatePathParams struct {
    TemplateName string `pathParam:"style=simple,explode=false,name=templateName"`
    
}

type DescribeProvisioningTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeProvisioningTemplateRequest struct {
    PathParams DescribeProvisioningTemplatePathParams 
    Headers DescribeProvisioningTemplateHeaders 
    
}

type DescribeProvisioningTemplateResponse struct {
    ContentType string 
    DescribeProvisioningTemplateResponse *shared.DescribeProvisioningTemplateResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    
}

