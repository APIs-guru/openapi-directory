package shared



type CustomRoutingListener struct {
    ListenerArn *string `json:"ListenerArn,omitempty"`
    PortRanges []PortRange `json:"PortRanges,omitempty"`
    
}

