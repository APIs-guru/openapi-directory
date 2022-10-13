package shared

type CreateForecastRequest struct {
	ForecastName  string   `json:"ForecastName"`
	ForecastTypes []string `json:"ForecastTypes"`
	PredictorArn  string   `json:"PredictorArn"`
	Tags          []Tag    `json:"Tags"`
}
