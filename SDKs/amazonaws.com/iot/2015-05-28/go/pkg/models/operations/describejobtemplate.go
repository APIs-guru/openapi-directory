package operations

import (
"openapi/pkg/models/shared")

type DescribeJobTemplatePathParams struct {
    JobTemplateID string `pathParam:"style=simple,explode=false,name=jobTemplateId"`
    
}

type DescribeJobTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeJobTemplateRequest struct {
    PathParams DescribeJobTemplatePathParams 
    Headers DescribeJobTemplateHeaders 
    
}

type DescribeJobTemplateResponse struct {
    ContentType string 
    DescribeJobTemplateResponse *shared.DescribeJobTemplateResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

