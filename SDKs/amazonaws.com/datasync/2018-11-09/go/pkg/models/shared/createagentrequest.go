package shared

type CreateAgentRequest struct {
	ActivationKey     string         `json:"ActivationKey"`
	AgentName         *string        `json:"AgentName"`
	SecurityGroupArns []string       `json:"SecurityGroupArns"`
	SubnetArns        []string       `json:"SubnetArns"`
	Tags              []TagListEntry `json:"Tags"`
	VpcEndpointID     *string        `json:"VpcEndpointId"`
}
