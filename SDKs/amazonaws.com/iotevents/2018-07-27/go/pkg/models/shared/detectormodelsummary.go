package shared

import (
	"time"
)

// DetectorModelSummary
// Information about the detector model.
type DetectorModelSummary struct {
	CreationTime             *time.Time `json:"creationTime,omitempty"`
	DetectorModelDescription *string    `json:"detectorModelDescription,omitempty"`
	DetectorModelName        *string    `json:"detectorModelName,omitempty"`
}
