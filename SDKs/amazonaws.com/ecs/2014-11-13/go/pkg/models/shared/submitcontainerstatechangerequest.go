package shared

type SubmitContainerStateChangeRequest struct {
	Cluster         *string          `json:"cluster"`
	ContainerName   *string          `json:"containerName"`
	ExitCode        *int64           `json:"exitCode"`
	NetworkBindings []NetworkBinding `json:"networkBindings"`
	Reason          *string          `json:"reason"`
	RuntimeID       *string          `json:"runtimeId"`
	Status          *string          `json:"status"`
	Task            *string          `json:"task"`
}
