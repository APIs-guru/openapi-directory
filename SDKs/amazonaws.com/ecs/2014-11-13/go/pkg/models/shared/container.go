package shared

// Container
// A Docker container that is part of a task.
type Container struct {
	ContainerArn      *string            `json:"containerArn,omitempty"`
	CPU               *string            `json:"cpu,omitempty"`
	ExitCode          *int64             `json:"exitCode,omitempty"`
	GpuIds            []string           `json:"gpuIds,omitempty"`
	HealthStatus      *HealthStatusEnum  `json:"healthStatus,omitempty"`
	Image             *string            `json:"image,omitempty"`
	ImageDigest       *string            `json:"imageDigest,omitempty"`
	LastStatus        *string            `json:"lastStatus,omitempty"`
	ManagedAgents     []ManagedAgent     `json:"managedAgents,omitempty"`
	Memory            *string            `json:"memory,omitempty"`
	MemoryReservation *string            `json:"memoryReservation,omitempty"`
	Name              *string            `json:"name,omitempty"`
	NetworkBindings   []NetworkBinding   `json:"networkBindings,omitempty"`
	NetworkInterfaces []NetworkInterface `json:"networkInterfaces,omitempty"`
	Reason            *string            `json:"reason,omitempty"`
	RuntimeID         *string            `json:"runtimeId,omitempty"`
	TaskArn           *string            `json:"taskArn,omitempty"`
}
