package shared

type ContainerStateChange struct {
	ContainerName   *string          `json:"containerName"`
	ExitCode        *int64           `json:"exitCode"`
	ImageDigest     *string          `json:"imageDigest"`
	NetworkBindings []NetworkBinding `json:"networkBindings"`
	Reason          *string          `json:"reason"`
	RuntimeID       *string          `json:"runtimeId"`
	Status          *string          `json:"status"`
}
