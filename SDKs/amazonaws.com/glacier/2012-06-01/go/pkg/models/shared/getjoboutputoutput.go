package shared

// GetJobOutputOutput
// Contains the Amazon S3 Glacier response to your request.
type GetJobOutputOutput struct {
	Body   *string `json:"body,omitempty"`
	Status *int64  `json:"status,omitempty"`
}
