package operations

import (
	"openapi/pkg/models/shared"
)

type AgentsPutAgentPathParams struct {
	AgentID int32 `pathParam:"style=simple,explode=false,name=agentID"`
}

type AgentsPutAgentRequestsInput struct {
	ApplicationXML             []byte                                 `request:"mediaType=application/xml"`
	BuildSystemSharedDtoAgent  *shared.BuildSystemSharedDtoAgentInput `request:"mediaType=application/json"`
	BuildSystemSharedDtoAgent1 *shared.BuildSystemSharedDtoAgentInput `request:"mediaType=application/x-www-form-urlencoded"`
	BuildSystemSharedDtoAgent2 *shared.BuildSystemSharedDtoAgentInput `request:"mediaType=text/json"`
	TextXML                    []byte                                 `request:"mediaType=text/xml"`
}

type AgentsPutAgentRequest struct {
	PathParams AgentsPutAgentPathParams
	Request    AgentsPutAgentRequestsInput
}

type AgentsPutAgentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
