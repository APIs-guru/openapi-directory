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

// BuildSystemSharedDtoJobRunInput
// A DTO for an IJobRun
type BuildSystemSharedDtoJobRunInput struct {
	EndDate   *time.Time                            `json:"EndDate,omitempty" form:"name=EndDate"`
	JobID     *int32                                `json:"JobID,omitempty" form:"name=JobID"`
	JobRunID  *int32                                `json:"JobRunID,omitempty" form:"name=JobRunID"`
	StartDate *time.Time                            `json:"StartDate,omitempty" form:"name=StartDate"`
	Status    *BuildSystemSharedDtoJobRunStatusEnum `json:"Status,omitempty" form:"name=Status"`
}

// BuildSystemSharedDtoJobRun
// A DTO for an IJobRun
type BuildSystemSharedDtoJobRun struct {
	ActivityRuns []BuildSystemSharedDtoActivityRun     `json:"ActivityRuns,omitempty"`
	EndDate      *time.Time                            `json:"EndDate,omitempty"`
	JobID        *int32                                `json:"JobID,omitempty"`
	JobRunID     *int32                                `json:"JobRunID,omitempty"`
	Parameters   []BuildSystemSharedDtoParameterValue  `json:"Parameters,omitempty"`
	StartDate    *time.Time                            `json:"StartDate,omitempty"`
	Status       *BuildSystemSharedDtoJobRunStatusEnum `json:"Status,omitempty"`
}
