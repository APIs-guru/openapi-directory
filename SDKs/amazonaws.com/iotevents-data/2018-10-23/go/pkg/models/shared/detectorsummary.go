package shared

import (
	"time"
)

// DetectorSummary
// Information about the detector (instance).
type DetectorSummary struct {
	CreationTime         *time.Time            `json:"creationTime,omitempty"`
	DetectorModelName    *string               `json:"detectorModelName,omitempty"`
	DetectorModelVersion *string               `json:"detectorModelVersion,omitempty"`
	KeyValue             *string               `json:"keyValue,omitempty"`
	LastUpdateTime       *time.Time            `json:"lastUpdateTime,omitempty"`
	State                *DetectorStateSummary `json:"state,omitempty"`
}
