package shared



type CreatePredictorRequest struct {
    AlgorithmArn *string `json:"AlgorithmArn,omitempty"`
    AutoMlOverrideStrategy *AutoMlOverrideStrategyEnum `json:"AutoMLOverrideStrategy,omitempty"`
    EncryptionConfig *EncryptionConfig `json:"EncryptionConfig,omitempty"`
    EvaluationParameters *EvaluationParameters `json:"EvaluationParameters,omitempty"`
    FeaturizationConfig FeaturizationConfig `json:"FeaturizationConfig"`
    ForecastHorizon int64 `json:"ForecastHorizon"`
    ForecastTypes []string `json:"ForecastTypes,omitempty"`
    HpoConfig *HyperParameterTuningJobConfig `json:"HPOConfig,omitempty"`
    InputDataConfig InputDataConfig `json:"InputDataConfig"`
    OptimizationMetric *OptimizationMetricEnum `json:"OptimizationMetric,omitempty"`
    PerformAutoMl *bool `json:"PerformAutoML,omitempty"`
    PerformHpo *bool `json:"PerformHPO,omitempty"`
    PredictorName string `json:"PredictorName"`
    Tags []Tag `json:"Tags,omitempty"`
    TrainingParameters map[string]string `json:"TrainingParameters,omitempty"`
    
}

