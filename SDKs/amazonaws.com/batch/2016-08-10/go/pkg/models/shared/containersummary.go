package shared

type ContainerSummary struct {
	ExitCode *int64  `json:"exitCode,omitempty"`
	Reason   *string `json:"reason,omitempty"`
}
