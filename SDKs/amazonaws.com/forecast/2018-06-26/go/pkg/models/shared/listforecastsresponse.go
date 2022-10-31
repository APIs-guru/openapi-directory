package shared



type ListForecastsResponse struct {
    Forecasts []ForecastSummary `json:"Forecasts,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

