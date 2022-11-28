package shared

import (
	"time"
)

// DetectorModelVersionSummary
// Information about the detector model version.
type DetectorModelVersionSummary struct {
	CreationTime         *time.Time                      `json:"creationTime,omitempty"`
	DetectorModelArn     *string                         `json:"detectorModelArn,omitempty"`
	DetectorModelName    *string                         `json:"detectorModelName,omitempty"`
	DetectorModelVersion *string                         `json:"detectorModelVersion,omitempty"`
	EvaluationMethod     *EvaluationMethodEnum           `json:"evaluationMethod,omitempty"`
	LastUpdateTime       *time.Time                      `json:"lastUpdateTime,omitempty"`
	RoleArn              *string                         `json:"roleArn,omitempty"`
	Status               *DetectorModelVersionStatusEnum `json:"status,omitempty"`
}
