package shared

type Listener struct {
	ClientAffinity *ClientAffinityEnum `json:"ClientAffinity"`
	ListenerArn    *string             `json:"ListenerArn"`
	PortRanges     []PortRange         `json:"PortRanges"`
	Protocol       *ProtocolEnum       `json:"Protocol"`
}
