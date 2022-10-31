package shared

type AgentListEntry struct {
	AgentArn *string          `json:"AgentArn,omitempty"`
	Name     *string          `json:"Name,omitempty"`
	Status   *AgentStatusEnum `json:"Status,omitempty"`
}
