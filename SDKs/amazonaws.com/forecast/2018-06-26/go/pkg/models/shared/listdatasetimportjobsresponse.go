package shared



type ListDatasetImportJobsResponse struct {
    DatasetImportJobs []DatasetImportJobSummary `json:"DatasetImportJobs,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

