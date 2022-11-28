package shared

// AgentNetworkInfo
// Network details about the host where the agent/connector resides.
type AgentNetworkInfo struct {
	IPAddress  *string `json:"ipAddress,omitempty"`
	MacAddress *string `json:"macAddress,omitempty"`
}
