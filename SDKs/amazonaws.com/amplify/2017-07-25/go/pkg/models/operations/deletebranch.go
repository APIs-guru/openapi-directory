package operations

import (
"openapi/pkg/models/shared")

type DeleteBranchPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    BranchName string `pathParam:"style=simple,explode=false,name=branchName"`
    
}

type DeleteBranchHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteBranchRequest struct {
    PathParams DeleteBranchPathParams 
    Headers DeleteBranchHeaders 
    
}

type DeleteBranchResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteBranchResult *shared.DeleteBranchResult 
    DependentServiceFailureException *interface{} 
    InternalFailureException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

