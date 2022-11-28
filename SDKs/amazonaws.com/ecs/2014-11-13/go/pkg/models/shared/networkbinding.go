package shared

// NetworkBinding
// Details on the network bindings between a container and its host container instance. After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.
type NetworkBinding struct {
	BindIP        *string                `json:"bindIP,omitempty"`
	ContainerPort *int64                 `json:"containerPort,omitempty"`
	HostPort      *int64                 `json:"hostPort,omitempty"`
	Protocol      *TransportProtocolEnum `json:"protocol,omitempty"`
}
