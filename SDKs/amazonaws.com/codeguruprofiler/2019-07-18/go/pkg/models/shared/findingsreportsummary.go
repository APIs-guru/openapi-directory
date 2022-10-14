package shared

import (
	"time"
)

type FindingsReportSummary struct {
	ID                    *string    `json:"id,omitempty"`
	ProfileEndTime        *time.Time `json:"profileEndTime,omitempty"`
	ProfileStartTime      *time.Time `json:"profileStartTime,omitempty"`
	ProfilingGroupName    *string    `json:"profilingGroupName,omitempty"`
	TotalNumberOfFindings *int64     `json:"totalNumberOfFindings,omitempty"`
}
