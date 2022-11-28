package shared

// BackupFailureDetails
// If backup creation fails, this structure contains the details of that failure.
type BackupFailureDetails struct {
	Message *string `json:"Message,omitempty"`
}
