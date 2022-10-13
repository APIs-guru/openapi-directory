package shared

import (
	"time"
)

type BuildSystemSharedDtoJobRunStatusEnum string

const (
	BuildSystemSharedDtoJobRunStatusEnumReady      BuildSystemSharedDtoJobRunStatusEnum = "Ready"
	BuildSystemSharedDtoJobRunStatusEnumInProgress BuildSystemSharedDtoJobRunStatusEnum = "InProgress"
	BuildSystemSharedDtoJobRunStatusEnumSucceeded  BuildSystemSharedDtoJobRunStatusEnum = "Succeeded"
	BuildSystemSharedDtoJobRunStatusEnumCancelled  BuildSystemSharedDtoJobRunStatusEnum = "Cancelled"
	BuildSystemSharedDtoJobRunStatusEnumFailed     BuildSystemSharedDtoJobRunStatusEnum = "Failed"
)

type BuildSystemSharedDtoJobRun struct {
	ActivityRuns []BuildSystemSharedDtoActivityRun     `json:"ActivityRuns"`
	EndDate      *time.Time                            `json:"EndDate"`
	JobID        *int32                                `json:"JobID"`
	JobRunID     *int32                                `json:"JobRunID"`
	Parameters   []BuildSystemSharedDtoParameterValue  `json:"Parameters"`
	StartDate    *time.Time                            `json:"StartDate"`
	Status       *BuildSystemSharedDtoJobRunStatusEnum `json:"Status"`
}
