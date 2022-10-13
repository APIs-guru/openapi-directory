package shared

type ContainerSummary struct {
	ExitCode *int64  `json:"exitCode"`
	Reason   *string `json:"reason"`
}
