package shared

type ListAgentsResponse struct {
	Agents    []AgentListEntry `json:"Agents"`
	NextToken *string          `json:"NextToken"`
}
