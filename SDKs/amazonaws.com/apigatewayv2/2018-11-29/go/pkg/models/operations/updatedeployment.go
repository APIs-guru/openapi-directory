package operations

import (
"openapi/pkg/models/shared")

type UpdateDeploymentPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    DeploymentID string `pathParam:"style=simple,explode=false,name=deploymentId"`
    
}

type UpdateDeploymentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateDeploymentRequestBody struct {
    Description *string `json:"description,omitempty"`
    
}

type UpdateDeploymentRequest struct {
    PathParams UpdateDeploymentPathParams 
    Headers UpdateDeploymentHeaders 
    Request UpdateDeploymentRequestBody `request:"mediaType=application/json"`
    
}

type UpdateDeploymentResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UpdateDeploymentResponse *shared.UpdateDeploymentResponse 
    
}

