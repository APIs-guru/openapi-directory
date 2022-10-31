package shared



type ListJobsOutput struct {
    JobList []GlacierJobDescription `json:"JobList,omitempty"`
    Marker *string `json:"Marker,omitempty"`
    
}

