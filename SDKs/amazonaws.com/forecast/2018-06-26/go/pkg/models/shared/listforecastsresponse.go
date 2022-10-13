package shared

type ListForecastsResponse struct {
	Forecasts []ForecastSummary `json:"Forecasts"`
	NextToken *string           `json:"NextToken"`
}
