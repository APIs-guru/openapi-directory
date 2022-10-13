package shared

import (
	"time"
)

type DetectorModelConfiguration struct {
	CreationTime             *time.Time                      `json:"creationTime"`
	DetectorModelArn         *string                         `json:"detectorModelArn"`
	DetectorModelDescription *string                         `json:"detectorModelDescription"`
	DetectorModelName        *string                         `json:"detectorModelName"`
	DetectorModelVersion     *string                         `json:"detectorModelVersion"`
	EvaluationMethod         *EvaluationMethodEnum           `json:"evaluationMethod"`
	Key                      *string                         `json:"key"`
	LastUpdateTime           *time.Time                      `json:"lastUpdateTime"`
	RoleArn                  *string                         `json:"roleArn"`
	Status                   *DetectorModelVersionStatusEnum `json:"status"`
}
