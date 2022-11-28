package shared

import (
	"time"
)

// BuildSystemSharedDtoActivityRun
// A DTO for an IActivityRun
type BuildSystemSharedDtoActivityRun struct {
	ActivityRunID *int32                                `json:"ActivityRunID,omitempty"`
	EndDate       *time.Time                            `json:"EndDate,omitempty"`
	JobActivityID *int32                                `json:"JobActivityID,omitempty"`
	JobRunID      *int32                                `json:"JobRunID,omitempty"`
	Parameters    []BuildSystemSharedDtoParameterValue  `json:"Parameters,omitempty"`
	StartDate     *time.Time                            `json:"StartDate,omitempty"`
	Status        BuildSystemSharedDtoActivityRunStatus `json:"Status"`
	Steps         []BuildSystemSharedDtoActivityStep    `json:"Steps,omitempty"`
}

// BuildSystemSharedDtoActivityRunInput
// A DTO for an IActivityRun
type BuildSystemSharedDtoActivityRunInput struct {
	ActivityRunID *int32                                `json:"ActivityRunID,omitempty" form:"name=ActivityRunID"`
	EndDate       *time.Time                            `json:"EndDate,omitempty" form:"name=EndDate"`
	JobActivityID *int32                                `json:"JobActivityID,omitempty" form:"name=JobActivityID"`
	JobRunID      *int32                                `json:"JobRunID,omitempty" form:"name=JobRunID"`
	StartDate     *time.Time                            `json:"StartDate,omitempty" form:"name=StartDate"`
	Status        BuildSystemSharedDtoActivityRunStatus `json:"Status" form:"name=Status"`
}
