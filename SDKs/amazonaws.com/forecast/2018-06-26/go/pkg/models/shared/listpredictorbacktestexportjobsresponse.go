package shared

type ListPredictorBacktestExportJobsResponse struct {
	NextToken                   *string                             `json:"NextToken"`
	PredictorBacktestExportJobs []PredictorBacktestExportJobSummary `json:"PredictorBacktestExportJobs"`
}
