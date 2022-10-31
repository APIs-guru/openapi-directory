package operations

import (
"openapi/pkg/models/shared")

type AgentsPutAgentStatusPathParams struct {
    AgentID int32 `pathParam:"style=simple,explode=false,name=agentID"`
    
}

type AgentsPutAgentStatusRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    BuildSystemSharedDtoAgentStatus *shared.BuildSystemSharedDtoAgentStatus `request:"mediaType=application/json"`
    BuildSystemSharedDtoAgentStatus1 *shared.BuildSystemSharedDtoAgentStatus `request:"mediaType=application/x-www-form-urlencoded"`
    BuildSystemSharedDtoAgentStatus2 *shared.BuildSystemSharedDtoAgentStatus `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type AgentsPutAgentStatusRequest struct {
    PathParams AgentsPutAgentStatusPathParams 
    Request AgentsPutAgentStatusRequests 
    
}

type AgentsPutAgentStatusResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

