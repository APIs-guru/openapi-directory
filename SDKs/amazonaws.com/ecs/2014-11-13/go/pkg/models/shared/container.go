package shared

type Container struct {
	ContainerArn      *string            `json:"containerArn"`
	CPU               *string            `json:"cpu"`
	ExitCode          *int64             `json:"exitCode"`
	GpuIds            []string           `json:"gpuIds"`
	HealthStatus      *HealthStatusEnum  `json:"healthStatus"`
	Image             *string            `json:"image"`
	ImageDigest       *string            `json:"imageDigest"`
	LastStatus        *string            `json:"lastStatus"`
	ManagedAgents     []ManagedAgent     `json:"managedAgents"`
	Memory            *string            `json:"memory"`
	MemoryReservation *string            `json:"memoryReservation"`
	Name              *string            `json:"name"`
	NetworkBindings   []NetworkBinding   `json:"networkBindings"`
	NetworkInterfaces []NetworkInterface `json:"networkInterfaces"`
	Reason            *string            `json:"reason"`
	RuntimeID         *string            `json:"runtimeId"`
	TaskArn           *string            `json:"taskArn"`
}
