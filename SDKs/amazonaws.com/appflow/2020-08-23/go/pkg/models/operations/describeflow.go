package operations

import (
"openapi/pkg/models/shared")

type DescribeFlowHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeFlowRequestBody struct {
    FlowName string `json:"flowName"`
    
}

type DescribeFlowRequest struct {
    Headers DescribeFlowHeaders 
    Request DescribeFlowRequestBody `request:"mediaType=application/json"`
    
}

type DescribeFlowResponse struct {
    ContentType string 
    DescribeFlowResponse *shared.DescribeFlowResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

