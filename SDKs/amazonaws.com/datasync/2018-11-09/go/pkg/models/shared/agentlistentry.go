package shared

type AgentListEntry struct {
	AgentArn *string          `json:"AgentArn"`
	Name     *string          `json:"Name"`
	Status   *AgentStatusEnum `json:"Status"`
}
