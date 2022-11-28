package shared

// Forecast
// Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response.
type Forecast struct {
	Predictions map[string][]DataPoint `json:"Predictions,omitempty"`
}
