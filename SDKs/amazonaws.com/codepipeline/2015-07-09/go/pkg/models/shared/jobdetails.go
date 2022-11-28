package shared

// JobDetails
// Represents information about the details of a job.
type JobDetails struct {
	AccountID *string  `json:"accountId,omitempty"`
	Data      *JobData `json:"data,omitempty"`
	ID        *string  `json:"id,omitempty"`
}
