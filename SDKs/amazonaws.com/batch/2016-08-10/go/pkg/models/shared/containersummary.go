package shared

// ContainerSummary
// An object representing summary details of a container within a job.
type ContainerSummary struct {
	ExitCode *int64  `json:"exitCode,omitempty"`
	Reason   *string `json:"reason,omitempty"`
}
