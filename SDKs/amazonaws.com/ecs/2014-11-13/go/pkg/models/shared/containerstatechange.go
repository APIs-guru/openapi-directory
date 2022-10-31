package shared



type ContainerStateChange struct {
    ContainerName *string `json:"containerName,omitempty"`
    ExitCode *int64 `json:"exitCode,omitempty"`
    ImageDigest *string `json:"imageDigest,omitempty"`
    NetworkBindings []NetworkBinding `json:"networkBindings,omitempty"`
    Reason *string `json:"reason,omitempty"`
    RuntimeID *string `json:"runtimeId,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

