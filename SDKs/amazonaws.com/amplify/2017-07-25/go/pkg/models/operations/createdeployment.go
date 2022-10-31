package operations

import (
"openapi/pkg/models/shared")

type CreateDeploymentPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    BranchName string `pathParam:"style=simple,explode=false,name=branchName"`
    
}

type CreateDeploymentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateDeploymentRequestBody struct {
    FileMap map[string]string `json:"fileMap,omitempty"`
    
}

type CreateDeploymentRequest struct {
    PathParams CreateDeploymentPathParams 
    Headers CreateDeploymentHeaders 
    Request CreateDeploymentRequestBody `request:"mediaType=application/json"`
    
}

type CreateDeploymentResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    CreateDeploymentResult *shared.CreateDeploymentResult 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

