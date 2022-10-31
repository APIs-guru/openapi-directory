package shared

type PortMapping struct {
	ContainerPort *int64                 `json:"containerPort,omitempty"`
	HostPort      *int64                 `json:"hostPort,omitempty"`
	Protocol      *TransportProtocolEnum `json:"protocol,omitempty"`
}
