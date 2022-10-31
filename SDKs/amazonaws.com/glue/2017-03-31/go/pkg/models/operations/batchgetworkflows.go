package operations

import (
"openapi/pkg/models/shared")


type BatchGetWorkflowsXAmzTargetEnum string

const (
    BatchGetWorkflowsXAmzTargetEnumAwsGlueBatchGetWorkflows BatchGetWorkflowsXAmzTargetEnum = "AWSGlue.BatchGetWorkflows"
)


type BatchGetWorkflowsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget BatchGetWorkflowsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type BatchGetWorkflowsRequest struct {
    Headers BatchGetWorkflowsHeaders 
    Request shared.BatchGetWorkflowsRequest `request:"mediaType=application/json"`
    
}

type BatchGetWorkflowsResponse struct {
    BatchGetWorkflowsResponse *shared.BatchGetWorkflowsResponse 
    ContentType string 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

