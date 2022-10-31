package shared



type NetworkBinding struct {
    BindIP *string `json:"bindIP,omitempty"`
    ContainerPort *int64 `json:"containerPort,omitempty"`
    HostPort *int64 `json:"hostPort,omitempty"`
    Protocol *TransportProtocolEnum `json:"protocol,omitempty"`
    
}

