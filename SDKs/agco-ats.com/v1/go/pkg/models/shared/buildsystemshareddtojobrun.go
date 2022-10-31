package shared

import (
"time")


type BuildSystemSharedDtoJobRunStatusEnum string

const (
    BuildSystemSharedDtoJobRunStatusEnumReady BuildSystemSharedDtoJobRunStatusEnum = "Ready"
BuildSystemSharedDtoJobRunStatusEnumInProgress BuildSystemSharedDtoJobRunStatusEnum = "InProgress"
BuildSystemSharedDtoJobRunStatusEnumSucceeded BuildSystemSharedDtoJobRunStatusEnum = "Succeeded"
BuildSystemSharedDtoJobRunStatusEnumCancelled BuildSystemSharedDtoJobRunStatusEnum = "Cancelled"
BuildSystemSharedDtoJobRunStatusEnumFailed BuildSystemSharedDtoJobRunStatusEnum = "Failed"
)


type BuildSystemSharedDtoJobRun struct {
    ActivityRuns []BuildSystemSharedDtoActivityRun `json:"ActivityRuns,omitempty"`
    EndDate *time.Time `json:"EndDate,omitempty"`
    JobID *int32 `json:"JobID,omitempty"`
    JobRunID *int32 `json:"JobRunID,omitempty"`
    Parameters []BuildSystemSharedDtoParameterValue `json:"Parameters,omitempty"`
    StartDate *time.Time `json:"StartDate,omitempty"`
    Status *BuildSystemSharedDtoJobRunStatusEnum `json:"Status,omitempty"`
    
}

