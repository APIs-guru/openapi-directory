package shared

// AcknowledgeJobOutput
// Represents the output of an AcknowledgeJob action.
type AcknowledgeJobOutput struct {
	Status *JobStatusEnum `json:"status,omitempty"`
}
