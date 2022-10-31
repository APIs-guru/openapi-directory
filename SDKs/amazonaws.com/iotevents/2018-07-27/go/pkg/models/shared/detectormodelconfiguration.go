package shared

import (
	"time"
)

type DetectorModelConfiguration struct {
	CreationTime             *time.Time                      `json:"creationTime,omitempty"`
	DetectorModelArn         *string                         `json:"detectorModelArn,omitempty"`
	DetectorModelDescription *string                         `json:"detectorModelDescription,omitempty"`
	DetectorModelName        *string                         `json:"detectorModelName,omitempty"`
	DetectorModelVersion     *string                         `json:"detectorModelVersion,omitempty"`
	EvaluationMethod         *EvaluationMethodEnum           `json:"evaluationMethod,omitempty"`
	Key                      *string                         `json:"key,omitempty"`
	LastUpdateTime           *time.Time                      `json:"lastUpdateTime,omitempty"`
	RoleArn                  *string                         `json:"roleArn,omitempty"`
	Status                   *DetectorModelVersionStatusEnum `json:"status,omitempty"`
}
