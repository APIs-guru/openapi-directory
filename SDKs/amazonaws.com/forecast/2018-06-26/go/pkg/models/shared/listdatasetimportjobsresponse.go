package shared

type ListDatasetImportJobsResponse struct {
	DatasetImportJobs []DatasetImportJobSummary `json:"DatasetImportJobs"`
	NextToken         *string                   `json:"NextToken"`
}
