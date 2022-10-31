package operations

import (
"openapi/pkg/models/shared")

type AgentsGetAgentAsyncPathParams struct {
    AgentID int32 `pathParam:"style=simple,explode=false,name=agentID"`
    
}

type AgentsGetAgentAsyncRequest struct {
    PathParams AgentsGetAgentAsyncPathParams 
    
}

type AgentsGetAgentAsyncResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    BuildSystemSharedDtoAgent *shared.BuildSystemSharedDtoAgent 
    ContentType string 
    StatusCode int64 
    
}

