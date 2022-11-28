package shared

// JobExecutionState
// Contains data about the state of a job execution.
type JobExecutionState struct {
	Status        *JobExecutionStatusEnum `json:"status,omitempty"`
	StatusDetails map[string]string       `json:"statusDetails,omitempty"`
	VersionNumber *int64                  `json:"versionNumber,omitempty"`
}
