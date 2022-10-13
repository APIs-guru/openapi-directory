package shared

type AgentPreview struct {
	AgentHealth      *AgentHealthEnum `json:"agentHealth"`
	AgentID          string           `json:"agentId"`
	AgentVersion     *string          `json:"agentVersion"`
	AutoScalingGroup *string          `json:"autoScalingGroup"`
	Hostname         *string          `json:"hostname"`
	Ipv4Address      *string          `json:"ipv4Address"`
	KernelVersion    *string          `json:"kernelVersion"`
	OperatingSystem  *string          `json:"operatingSystem"`
}
