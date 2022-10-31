package shared



type FeaturizationConfig struct {
    Featurizations []Featurization `json:"Featurizations,omitempty"`
    ForecastDimensions []string `json:"ForecastDimensions,omitempty"`
    ForecastFrequency string `json:"ForecastFrequency"`
    
}

