package shared

import (
	"time"
)

type DetectorSummary struct {
	CreationTime         *time.Time            `json:"creationTime"`
	DetectorModelName    *string               `json:"detectorModelName"`
	DetectorModelVersion *string               `json:"detectorModelVersion"`
	KeyValue             *string               `json:"keyValue"`
	LastUpdateTime       *time.Time            `json:"lastUpdateTime"`
	State                *DetectorStateSummary `json:"state"`
}
