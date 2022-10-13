package shared

import (
	"time"
)

type BuildSystemSharedDtoActivityRun struct {
	ActivityRunID *int32                                `json:"ActivityRunID"`
	EndDate       *time.Time                            `json:"EndDate"`
	JobActivityID *int32                                `json:"JobActivityID"`
	JobRunID      *int32                                `json:"JobRunID"`
	Parameters    []BuildSystemSharedDtoParameterValue  `json:"Parameters"`
	StartDate     *time.Time                            `json:"StartDate"`
	Status        BuildSystemSharedDtoActivityRunStatus `json:"Status"`
	Steps         []BuildSystemSharedDtoActivityStep    `json:"Steps"`
}
