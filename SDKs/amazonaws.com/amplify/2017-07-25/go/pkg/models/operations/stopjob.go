package operations

import (
"openapi/pkg/models/shared")

type StopJobPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    BranchName string `pathParam:"style=simple,explode=false,name=branchName"`
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    
}

type StopJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type StopJobRequest struct {
    PathParams StopJobPathParams 
    Headers StopJobHeaders 
    
}

type StopJobResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    StopJobResult *shared.StopJobResult 
    UnauthorizedException *interface{} 
    
}

