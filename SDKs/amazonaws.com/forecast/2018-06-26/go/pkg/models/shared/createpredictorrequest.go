package shared

type CreatePredictorRequest struct {
	AlgorithmArn           *string                        `json:"AlgorithmArn"`
	AutoMlOverrideStrategy *AutoMlOverrideStrategyEnum    `json:"AutoMLOverrideStrategy"`
	EncryptionConfig       *EncryptionConfig              `json:"EncryptionConfig"`
	EvaluationParameters   *EvaluationParameters          `json:"EvaluationParameters"`
	FeaturizationConfig    FeaturizationConfig            `json:"FeaturizationConfig"`
	ForecastHorizon        int64                          `json:"ForecastHorizon"`
	ForecastTypes          []string                       `json:"ForecastTypes"`
	HpoConfig              *HyperParameterTuningJobConfig `json:"HPOConfig"`
	InputDataConfig        InputDataConfig                `json:"InputDataConfig"`
	OptimizationMetric     *OptimizationMetricEnum        `json:"OptimizationMetric"`
	PerformAutoMl          *bool                          `json:"PerformAutoML"`
	PerformHpo             *bool                          `json:"PerformHPO"`
	PredictorName          string                         `json:"PredictorName"`
	Tags                   []Tag                          `json:"Tags"`
	TrainingParameters     map[string]string              `json:"TrainingParameters"`
}
