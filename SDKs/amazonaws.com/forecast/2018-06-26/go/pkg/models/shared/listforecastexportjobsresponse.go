package shared

type ListForecastExportJobsResponse struct {
	ForecastExportJobs []ForecastExportJobSummary `json:"ForecastExportJobs,omitempty"`
	NextToken          *string                    `json:"NextToken,omitempty"`
}
