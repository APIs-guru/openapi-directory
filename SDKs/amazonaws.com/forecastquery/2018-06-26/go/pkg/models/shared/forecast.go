package shared

type Forecast struct {
	Predictions map[string][]DataPoint `json:"Predictions"`
}
