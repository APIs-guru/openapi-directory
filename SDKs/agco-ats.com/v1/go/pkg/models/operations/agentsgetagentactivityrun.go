package operations

import (
"openapi/pkg/models/shared")

type AgentsGetAgentActivityRunPathParams struct {
    AgentID int32 `pathParam:"style=simple,explode=false,name=agentID"`
    
}

type AgentsGetAgentActivityRunRequest struct {
    PathParams AgentsGetAgentActivityRunPathParams 
    
}

type AgentsGetAgentActivityRunResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    BuildSystemSharedDtoActivityRun *shared.BuildSystemSharedDtoActivityRun 
    ContentType string 
    StatusCode int64 
    
}

