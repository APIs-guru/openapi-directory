package shared

type JobExecutionState struct {
	Status        *JobExecutionStatusEnum `json:"status,omitempty"`
	StatusDetails map[string]string       `json:"statusDetails,omitempty"`
	VersionNumber *int64                  `json:"versionNumber,omitempty"`
}
