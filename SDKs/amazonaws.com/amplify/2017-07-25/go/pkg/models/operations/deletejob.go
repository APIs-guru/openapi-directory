package operations

import (
"openapi/pkg/models/shared")

type DeleteJobPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    BranchName string `pathParam:"style=simple,explode=false,name=branchName"`
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    
}

type DeleteJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteJobRequest struct {
    PathParams DeleteJobPathParams 
    Headers DeleteJobHeaders 
    
}

type DeleteJobResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteJobResult *shared.DeleteJobResult 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

