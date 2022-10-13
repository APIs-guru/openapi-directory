package shared

import (
	"time"
)

type StopContinuousExportResponse struct {
	StartTime *time.Time `json:"startTime"`
	StopTime  *time.Time `json:"stopTime"`
}
