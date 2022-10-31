package shared

type UpdateAgentRequest struct {
	AgentArn string  `json:"AgentArn"`
	Name     *string `json:"Name,omitempty"`
}
