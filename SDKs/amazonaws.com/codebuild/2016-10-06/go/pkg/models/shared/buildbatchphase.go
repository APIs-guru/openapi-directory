package shared

import (
	"time"
)

type BuildBatchPhase struct {
	Contexts          []PhaseContext           `json:"contexts"`
	DurationInSeconds *int64                   `json:"durationInSeconds"`
	EndTime           *time.Time               `json:"endTime"`
	PhaseStatus       *StatusTypeEnum          `json:"phaseStatus"`
	PhaseType         *BuildBatchPhaseTypeEnum `json:"phaseType"`
	StartTime         *time.Time               `json:"startTime"`
}
