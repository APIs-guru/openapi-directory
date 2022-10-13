package shared

import (
	"time"
)

type Detector struct {
	CreationTime         *time.Time     `json:"creationTime"`
	DetectorModelName    *string        `json:"detectorModelName"`
	DetectorModelVersion *string        `json:"detectorModelVersion"`
	KeyValue             *string        `json:"keyValue"`
	LastUpdateTime       *time.Time     `json:"lastUpdateTime"`
	State                *DetectorState `json:"state"`
}
