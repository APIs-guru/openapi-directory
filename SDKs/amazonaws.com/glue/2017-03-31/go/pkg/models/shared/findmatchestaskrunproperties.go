package shared

// FindMatchesTaskRunProperties
// Specifies configuration properties for a Find Matches task run.
type FindMatchesTaskRunProperties struct {
	JobID    *string `json:"JobId,omitempty"`
	JobName  *string `json:"JobName,omitempty"`
	JobRunID *string `json:"JobRunId,omitempty"`
}
