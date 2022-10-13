package shared

type QueryForecastRequest struct {
	EndDate     *string           `json:"EndDate"`
	Filters     map[string]string `json:"Filters"`
	ForecastArn string            `json:"ForecastArn"`
	NextToken   *string           `json:"NextToken"`
	StartDate   *string           `json:"StartDate"`
}
