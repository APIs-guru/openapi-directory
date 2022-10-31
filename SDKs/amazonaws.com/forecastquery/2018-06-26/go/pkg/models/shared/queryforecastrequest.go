package shared



type QueryForecastRequest struct {
    EndDate *string `json:"EndDate,omitempty"`
    Filters map[string]string `json:"Filters"`
    ForecastArn string `json:"ForecastArn"`
    NextToken *string `json:"NextToken,omitempty"`
    StartDate *string `json:"StartDate,omitempty"`
    
}

