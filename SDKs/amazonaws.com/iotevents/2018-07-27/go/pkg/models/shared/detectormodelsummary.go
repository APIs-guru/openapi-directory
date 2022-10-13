package shared

import (
	"time"
)

type DetectorModelSummary struct {
	CreationTime             *time.Time `json:"creationTime"`
	DetectorModelDescription *string    `json:"detectorModelDescription"`
	DetectorModelName        *string    `json:"detectorModelName"`
}
