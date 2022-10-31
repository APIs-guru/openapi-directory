package shared



type UpdateCustomRoutingListenerRequest struct {
    ListenerArn string `json:"ListenerArn"`
    PortRanges []PortRange `json:"PortRanges"`
    
}

