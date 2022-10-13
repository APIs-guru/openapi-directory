package shared

type PortMapping struct {
	ContainerPort *int64                 `json:"containerPort"`
	HostPort      *int64                 `json:"hostPort"`
	Protocol      *TransportProtocolEnum `json:"protocol"`
}
