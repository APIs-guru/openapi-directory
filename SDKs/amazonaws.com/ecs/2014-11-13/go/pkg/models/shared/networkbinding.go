package shared

type NetworkBinding struct {
	BindIP        *string                `json:"bindIP"`
	ContainerPort *int64                 `json:"containerPort"`
	HostPort      *int64                 `json:"hostPort"`
	Protocol      *TransportProtocolEnum `json:"protocol"`
}
