package shared

// OnPremConfig
// A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.
type OnPremConfig struct {
	AgentArns []string `json:"AgentArns"`
}
