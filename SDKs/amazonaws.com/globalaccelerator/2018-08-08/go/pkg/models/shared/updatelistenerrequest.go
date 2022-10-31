package shared



type UpdateListenerRequest struct {
    ClientAffinity *ClientAffinityEnum `json:"ClientAffinity,omitempty"`
    ListenerArn string `json:"ListenerArn"`
    PortRanges []PortRange `json:"PortRanges,omitempty"`
    Protocol *ProtocolEnum `json:"Protocol,omitempty"`
    
}

