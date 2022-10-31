package operations

import (
"openapi/pkg/models/shared")


type ResumeWorkflowRunXAmzTargetEnum string

const (
    ResumeWorkflowRunXAmzTargetEnumAwsGlueResumeWorkflowRun ResumeWorkflowRunXAmzTargetEnum = "AWSGlue.ResumeWorkflowRun"
)


type ResumeWorkflowRunHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ResumeWorkflowRunXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ResumeWorkflowRunRequest struct {
    Headers ResumeWorkflowRunHeaders 
    Request shared.ResumeWorkflowRunRequest `request:"mediaType=application/json"`
    
}

type ResumeWorkflowRunResponse struct {
    ConcurrentRunsExceededException *interface{} 
    ContentType string 
    EntityNotFoundException *interface{} 
    IllegalWorkflowStateException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    ResumeWorkflowRunResponse *shared.ResumeWorkflowRunResponse 
    StatusCode int64 
    
}

