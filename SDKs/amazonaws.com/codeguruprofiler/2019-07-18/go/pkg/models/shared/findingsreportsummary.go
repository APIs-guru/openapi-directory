package shared

import (
	"time"
)

// FindingsReportSummary
//
//	Information about potential recommendations that might be created from the analysis of profiling data.
type FindingsReportSummary struct {
	ID                    *string    `json:"id,omitempty"`
	ProfileEndTime        *time.Time `json:"profileEndTime,omitempty"`
	ProfileStartTime      *time.Time `json:"profileStartTime,omitempty"`
	ProfilingGroupName    *string    `json:"profilingGroupName,omitempty"`
	TotalNumberOfFindings *int64     `json:"totalNumberOfFindings,omitempty"`
}
