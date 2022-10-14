package shared

import (
	"time"
)

type DescribePredictorResponse struct {
	AlgorithmArn                    *string                        `json:"AlgorithmArn,omitempty"`
	AutoMlAlgorithmArns             []string                       `json:"AutoMLAlgorithmArns,omitempty"`
	AutoMlOverrideStrategy          *AutoMlOverrideStrategyEnum    `json:"AutoMLOverrideStrategy,omitempty"`
	CreationTime                    *time.Time                     `json:"CreationTime,omitempty"`
	DatasetImportJobArns            []string                       `json:"DatasetImportJobArns,omitempty"`
	EncryptionConfig                *EncryptionConfig              `json:"EncryptionConfig,omitempty"`
	EstimatedTimeRemainingInMinutes *int64                         `json:"EstimatedTimeRemainingInMinutes,omitempty"`
	EvaluationParameters            *EvaluationParameters          `json:"EvaluationParameters,omitempty"`
	FeaturizationConfig             *FeaturizationConfig           `json:"FeaturizationConfig,omitempty"`
	ForecastHorizon                 *int64                         `json:"ForecastHorizon,omitempty"`
	ForecastTypes                   []string                       `json:"ForecastTypes,omitempty"`
	HpoConfig                       *HyperParameterTuningJobConfig `json:"HPOConfig,omitempty"`
	InputDataConfig                 *InputDataConfig               `json:"InputDataConfig,omitempty"`
	LastModificationTime            *time.Time                     `json:"LastModificationTime,omitempty"`
	Message                         *string                        `json:"Message,omitempty"`
	OptimizationMetric              *OptimizationMetricEnum        `json:"OptimizationMetric,omitempty"`
	PerformAutoMl                   *bool                          `json:"PerformAutoML,omitempty"`
	PerformHpo                      *bool                          `json:"PerformHPO,omitempty"`
	PredictorArn                    *string                        `json:"PredictorArn,omitempty"`
	PredictorExecutionDetails       *PredictorExecutionDetails     `json:"PredictorExecutionDetails,omitempty"`
	PredictorName                   *string                        `json:"PredictorName,omitempty"`
	Status                          *string                        `json:"Status,omitempty"`
	TrainingParameters              map[string]string              `json:"TrainingParameters,omitempty"`
}
