package shared

import (
	"time"
)

type BuildPhase struct {
	Contexts          []PhaseContext      `json:"contexts"`
	DurationInSeconds *int64              `json:"durationInSeconds"`
	EndTime           *time.Time          `json:"endTime"`
	PhaseStatus       *StatusTypeEnum     `json:"phaseStatus"`
	PhaseType         *BuildPhaseTypeEnum `json:"phaseType"`
	StartTime         *time.Time          `json:"startTime"`
}
