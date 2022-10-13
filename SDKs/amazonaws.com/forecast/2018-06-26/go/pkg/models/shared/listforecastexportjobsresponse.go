package shared

type ListForecastExportJobsResponse struct {
	ForecastExportJobs []ForecastExportJobSummary `json:"ForecastExportJobs"`
	NextToken          *string                    `json:"NextToken"`
}
