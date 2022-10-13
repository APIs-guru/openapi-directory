package shared

type ListJobsOutput struct {
	JobList []GlacierJobDescription `json:"JobList"`
	Marker  *string                 `json:"Marker"`
}
