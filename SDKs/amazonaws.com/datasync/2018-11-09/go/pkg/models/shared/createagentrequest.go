package shared

// CreateAgentRequest
// CreateAgentRequest
type CreateAgentRequest struct {
	ActivationKey     string         `json:"ActivationKey"`
	AgentName         *string        `json:"AgentName,omitempty"`
	SecurityGroupArns []string       `json:"SecurityGroupArns,omitempty"`
	SubnetArns        []string       `json:"SubnetArns,omitempty"`
	Tags              []TagListEntry `json:"Tags,omitempty"`
	VpcEndpointID     *string        `json:"VpcEndpointId,omitempty"`
}
