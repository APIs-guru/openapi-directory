package shared

type CreateForecastExportJobRequest struct {
	Destination           DataDestination `json:"Destination"`
	ForecastArn           string          `json:"ForecastArn"`
	ForecastExportJobName string          `json:"ForecastExportJobName"`
	Tags                  []Tag           `json:"Tags"`
}
