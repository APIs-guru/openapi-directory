package shared

type AgentNetworkInfo struct {
	IPAddress  *string `json:"ipAddress,omitempty"`
	MacAddress *string `json:"macAddress,omitempty"`
}
