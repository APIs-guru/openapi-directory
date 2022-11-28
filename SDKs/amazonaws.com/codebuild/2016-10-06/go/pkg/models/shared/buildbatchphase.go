package shared

import (
	"time"
)

// BuildBatchPhase
// Contains information about a stage for a batch build.
type BuildBatchPhase struct {
	Contexts          []PhaseContext           `json:"contexts,omitempty"`
	DurationInSeconds *int64                   `json:"durationInSeconds,omitempty"`
	EndTime           *time.Time               `json:"endTime,omitempty"`
	PhaseStatus       *StatusTypeEnum          `json:"phaseStatus,omitempty"`
	PhaseType         *BuildBatchPhaseTypeEnum `json:"phaseType,omitempty"`
	StartTime         *time.Time               `json:"startTime,omitempty"`
}
