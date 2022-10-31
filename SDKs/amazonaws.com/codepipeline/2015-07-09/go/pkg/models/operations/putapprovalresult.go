package operations

import (
"openapi/pkg/models/shared")


type PutApprovalResultXAmzTargetEnum string

const (
    PutApprovalResultXAmzTargetEnumCodePipeline20150709PutApprovalResult PutApprovalResultXAmzTargetEnum = "CodePipeline_20150709.PutApprovalResult"
)


type PutApprovalResultHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutApprovalResultXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutApprovalResultRequest struct {
    Headers PutApprovalResultHeaders 
    Request shared.PutApprovalResultInput `request:"mediaType=application/json"`
    
}

type PutApprovalResultResponse struct {
    ActionNotFoundException *interface{} 
    ApprovalAlreadyCompletedException *interface{} 
    ContentType string 
    InvalidApprovalTokenException *interface{} 
    PipelineNotFoundException *interface{} 
    PutApprovalResultOutput *shared.PutApprovalResultOutput 
    StageNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

