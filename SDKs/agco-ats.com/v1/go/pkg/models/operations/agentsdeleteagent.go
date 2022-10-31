package operations

type AgentsDeleteAgentPathParams struct {
	AgentID int32 `pathParam:"style=simple,explode=false,name=agentID"`
}

type AgentsDeleteAgentRequest struct {
	PathParams AgentsDeleteAgentPathParams
}

type AgentsDeleteAgentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
