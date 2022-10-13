package shared

type ListPredictorBacktestExportJobsRequest struct {
	Filters    []Filter `json:"Filters"`
	MaxResults *int64   `json:"MaxResults"`
	NextToken  *string  `json:"NextToken"`
}
