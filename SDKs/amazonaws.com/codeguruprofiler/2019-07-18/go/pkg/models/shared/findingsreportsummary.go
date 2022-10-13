package shared

import (
	"time"
)

type FindingsReportSummary struct {
	ID                    *string    `json:"id"`
	ProfileEndTime        *time.Time `json:"profileEndTime"`
	ProfileStartTime      *time.Time `json:"profileStartTime"`
	ProfilingGroupName    *string    `json:"profilingGroupName"`
	TotalNumberOfFindings *int64     `json:"totalNumberOfFindings"`
}
