package shared



type Featurization struct {
    AttributeName string `json:"AttributeName"`
    FeaturizationPipeline []FeaturizationMethod `json:"FeaturizationPipeline,omitempty"`
    
}

