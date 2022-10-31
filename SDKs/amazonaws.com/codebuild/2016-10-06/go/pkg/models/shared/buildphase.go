package shared

import (
	"time"
)

type BuildPhase struct {
	Contexts          []PhaseContext      `json:"contexts,omitempty"`
	DurationInSeconds *int64              `json:"durationInSeconds,omitempty"`
	EndTime           *time.Time          `json:"endTime,omitempty"`
	PhaseStatus       *StatusTypeEnum     `json:"phaseStatus,omitempty"`
	PhaseType         *BuildPhaseTypeEnum `json:"phaseType,omitempty"`
	StartTime         *time.Time          `json:"startTime,omitempty"`
}
