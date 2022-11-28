package operations

import (
	"openapi/pkg/models/shared"
)

type AgentsPutAgentActivityRunPathParams struct {
	AgentID int32 `pathParam:"style=simple,explode=false,name=agentID"`
}

type AgentsPutAgentActivityRunRequestsInput struct {
	ApplicationXML                   []byte                                       `request:"mediaType=application/xml"`
	BuildSystemSharedDtoActivityRun  *shared.BuildSystemSharedDtoActivityRunInput `request:"mediaType=application/json"`
	BuildSystemSharedDtoActivityRun1 *shared.BuildSystemSharedDtoActivityRunInput `request:"mediaType=application/x-www-form-urlencoded"`
	BuildSystemSharedDtoActivityRun2 *shared.BuildSystemSharedDtoActivityRunInput `request:"mediaType=text/json"`
	TextXML                          []byte                                       `request:"mediaType=text/xml"`
}

type AgentsPutAgentActivityRunRequest struct {
	PathParams AgentsPutAgentActivityRunPathParams
	Request    AgentsPutAgentActivityRunRequestsInput
}

type AgentsPutAgentActivityRunResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
