package shared

type SubmitContainerStateChangeRequest struct {
	Cluster         *string          `json:"cluster,omitempty"`
	ContainerName   *string          `json:"containerName,omitempty"`
	ExitCode        *int64           `json:"exitCode,omitempty"`
	NetworkBindings []NetworkBinding `json:"networkBindings,omitempty"`
	Reason          *string          `json:"reason,omitempty"`
	RuntimeID       *string          `json:"runtimeId,omitempty"`
	Status          *string          `json:"status,omitempty"`
	Task            *string          `json:"task,omitempty"`
}
