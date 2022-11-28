package shared

import (
	"time"
)

// Detector
// Information about the detector (instance).
type Detector struct {
	CreationTime         *time.Time     `json:"creationTime,omitempty"`
	DetectorModelName    *string        `json:"detectorModelName,omitempty"`
	DetectorModelVersion *string        `json:"detectorModelVersion,omitempty"`
	KeyValue             *string        `json:"keyValue,omitempty"`
	LastUpdateTime       *time.Time     `json:"lastUpdateTime,omitempty"`
	State                *DetectorState `json:"state,omitempty"`
}
