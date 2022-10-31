package operations

import (
"openapi/pkg/models/shared")

type UpdatePipelineStatusPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=Id"`
    
}

type UpdatePipelineStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdatePipelineStatusRequestBody struct {
    Status string `json:"Status"`
    
}

type UpdatePipelineStatusRequest struct {
    PathParams UpdatePipelineStatusPathParams 
    Headers UpdatePipelineStatusHeaders 
    Request UpdatePipelineStatusRequestBody `request:"mediaType=application/json"`
    
}

type UpdatePipelineStatusResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    IncompatibleVersionException *interface{} 
    InternalServiceException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdatePipelineStatusResponse *shared.UpdatePipelineStatusResponse 
    ValidationException *interface{} 
    
}

