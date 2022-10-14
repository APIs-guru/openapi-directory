package shared

type AgentPreview struct {
	AgentHealth      *AgentHealthEnum `json:"agentHealth,omitempty"`
	AgentID          string           `json:"agentId"`
	AgentVersion     *string          `json:"agentVersion,omitempty"`
	AutoScalingGroup *string          `json:"autoScalingGroup,omitempty"`
	Hostname         *string          `json:"hostname,omitempty"`
	Ipv4Address      *string          `json:"ipv4Address,omitempty"`
	KernelVersion    *string          `json:"kernelVersion,omitempty"`
	OperatingSystem  *string          `json:"operatingSystem,omitempty"`
}
