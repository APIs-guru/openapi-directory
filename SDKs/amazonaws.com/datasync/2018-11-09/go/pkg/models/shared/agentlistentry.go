package shared

// AgentListEntry
// Represents a single entry in a list of agents. <code>AgentListEntry</code> returns an array that contains a list of agents when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html">ListAgents</a> operation is called.
type AgentListEntry struct {
	AgentArn *string          `json:"AgentArn,omitempty"`
	Name     *string          `json:"Name,omitempty"`
	Status   *AgentStatusEnum `json:"Status,omitempty"`
}
