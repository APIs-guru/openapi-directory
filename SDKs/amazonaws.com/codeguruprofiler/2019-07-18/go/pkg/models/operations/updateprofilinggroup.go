package operations

import (
"openapi/pkg/models/shared")

type UpdateProfilingGroupPathParams struct {
    ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
    
}

type UpdateProfilingGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateProfilingGroupRequestBodyAgentOrchestrationConfig struct {
    ProfilingEnabled *bool `json:"profilingEnabled,omitempty"`
    
}

type UpdateProfilingGroupRequestBody struct {
    AgentOrchestrationConfig UpdateProfilingGroupRequestBodyAgentOrchestrationConfig `json:"agentOrchestrationConfig"`
    
}

type UpdateProfilingGroupRequest struct {
    PathParams UpdateProfilingGroupPathParams 
    Headers UpdateProfilingGroupHeaders 
    Request UpdateProfilingGroupRequestBody `request:"mediaType=application/json"`
    
}

type UpdateProfilingGroupResponse struct {
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateProfilingGroupResponse *shared.UpdateProfilingGroupResponse 
    ValidationException *interface{} 
    
}

