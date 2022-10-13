package shared

import (
	"time"
)

type DescribePredictorResponse struct {
	AlgorithmArn                    *string                        `json:"AlgorithmArn"`
	AutoMlAlgorithmArns             []string                       `json:"AutoMLAlgorithmArns"`
	AutoMlOverrideStrategy          *AutoMlOverrideStrategyEnum    `json:"AutoMLOverrideStrategy"`
	CreationTime                    *time.Time                     `json:"CreationTime"`
	DatasetImportJobArns            []string                       `json:"DatasetImportJobArns"`
	EncryptionConfig                *EncryptionConfig              `json:"EncryptionConfig"`
	EstimatedTimeRemainingInMinutes *int64                         `json:"EstimatedTimeRemainingInMinutes"`
	EvaluationParameters            *EvaluationParameters          `json:"EvaluationParameters"`
	FeaturizationConfig             *FeaturizationConfig           `json:"FeaturizationConfig"`
	ForecastHorizon                 *int64                         `json:"ForecastHorizon"`
	ForecastTypes                   []string                       `json:"ForecastTypes"`
	HpoConfig                       *HyperParameterTuningJobConfig `json:"HPOConfig"`
	InputDataConfig                 *InputDataConfig               `json:"InputDataConfig"`
	LastModificationTime            *time.Time                     `json:"LastModificationTime"`
	Message                         *string                        `json:"Message"`
	OptimizationMetric              *OptimizationMetricEnum        `json:"OptimizationMetric"`
	PerformAutoMl                   *bool                          `json:"PerformAutoML"`
	PerformHpo                      *bool                          `json:"PerformHPO"`
	PredictorArn                    *string                        `json:"PredictorArn"`
	PredictorExecutionDetails       *PredictorExecutionDetails     `json:"PredictorExecutionDetails"`
	PredictorName                   *string                        `json:"PredictorName"`
	Status                          *string                        `json:"Status"`
	TrainingParameters              map[string]string              `json:"TrainingParameters"`
}
