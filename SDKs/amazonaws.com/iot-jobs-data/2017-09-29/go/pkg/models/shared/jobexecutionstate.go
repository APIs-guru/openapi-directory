package shared

type JobExecutionState struct {
	Status        *JobExecutionStatusEnum `json:"status"`
	StatusDetails map[string]string       `json:"statusDetails"`
	VersionNumber *int64                  `json:"versionNumber"`
}
