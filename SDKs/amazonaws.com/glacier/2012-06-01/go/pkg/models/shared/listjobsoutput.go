package shared

// ListJobsOutput
// Contains the Amazon S3 Glacier response to your request.
type ListJobsOutput struct {
	JobList []GlacierJobDescription `json:"JobList,omitempty"`
	Marker  *string                 `json:"Marker,omitempty"`
}
