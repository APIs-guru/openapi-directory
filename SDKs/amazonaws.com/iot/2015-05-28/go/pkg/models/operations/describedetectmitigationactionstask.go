package operations

import (
"openapi/pkg/models/shared")

type DescribeDetectMitigationActionsTaskPathParams struct {
    TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
    
}

type DescribeDetectMitigationActionsTaskHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeDetectMitigationActionsTaskRequest struct {
    PathParams DescribeDetectMitigationActionsTaskPathParams 
    Headers DescribeDetectMitigationActionsTaskHeaders 
    
}

type DescribeDetectMitigationActionsTaskResponse struct {
    ContentType string 
    DescribeDetectMitigationActionsTaskResponse *shared.DescribeDetectMitigationActionsTaskResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

