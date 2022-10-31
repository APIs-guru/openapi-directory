package operations

import (
"openapi/pkg/models/shared")

type GetDeploymentPathParams struct {
    DeploymentID string `pathParam:"style=simple,explode=false,name=deploymentId"`
    
}

type GetDeploymentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeploymentRequest struct {
    PathParams GetDeploymentPathParams 
    Headers GetDeploymentHeaders 
    
}

type GetDeploymentResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetDeploymentResponse *shared.GetDeploymentResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

