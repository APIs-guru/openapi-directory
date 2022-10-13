package shared

type FeaturizationConfig struct {
	Featurizations     []Featurization `json:"Featurizations"`
	ForecastDimensions []string        `json:"ForecastDimensions"`
	ForecastFrequency  string          `json:"ForecastFrequency"`
}
