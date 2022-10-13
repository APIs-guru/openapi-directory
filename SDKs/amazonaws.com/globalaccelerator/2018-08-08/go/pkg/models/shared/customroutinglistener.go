package shared

type CustomRoutingListener struct {
	ListenerArn *string     `json:"ListenerArn"`
	PortRanges  []PortRange `json:"PortRanges"`
}
