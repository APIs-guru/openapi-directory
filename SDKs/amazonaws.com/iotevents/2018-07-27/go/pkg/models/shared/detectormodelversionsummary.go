package shared

import (
	"time"
)

type DetectorModelVersionSummary struct {
	CreationTime         *time.Time                      `json:"creationTime"`
	DetectorModelArn     *string                         `json:"detectorModelArn"`
	DetectorModelName    *string                         `json:"detectorModelName"`
	DetectorModelVersion *string                         `json:"detectorModelVersion"`
	EvaluationMethod     *EvaluationMethodEnum           `json:"evaluationMethod"`
	LastUpdateTime       *time.Time                      `json:"lastUpdateTime"`
	RoleArn              *string                         `json:"roleArn"`
	Status               *DetectorModelVersionStatusEnum `json:"status"`
}
