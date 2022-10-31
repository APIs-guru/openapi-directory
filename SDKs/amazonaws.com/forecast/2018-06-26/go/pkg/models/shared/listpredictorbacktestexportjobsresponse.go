package shared

type ListPredictorBacktestExportJobsResponse struct {
	NextToken                   *string                             `json:"NextToken,omitempty"`
	PredictorBacktestExportJobs []PredictorBacktestExportJobSummary `json:"PredictorBacktestExportJobs,omitempty"`
}
