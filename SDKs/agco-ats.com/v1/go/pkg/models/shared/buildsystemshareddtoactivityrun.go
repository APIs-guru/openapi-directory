package shared

import (
"time")

type BuildSystemSharedDtoActivityRun struct {
    ActivityRunID *int32 `json:"ActivityRunID,omitempty"`
    EndDate *time.Time `json:"EndDate,omitempty"`
    JobActivityID *int32 `json:"JobActivityID,omitempty"`
    JobRunID *int32 `json:"JobRunID,omitempty"`
    Parameters []BuildSystemSharedDtoParameterValue `json:"Parameters,omitempty"`
    StartDate *time.Time `json:"StartDate,omitempty"`
    Status BuildSystemSharedDtoActivityRunStatus `json:"Status"`
    Steps []BuildSystemSharedDtoActivityStep `json:"Steps,omitempty"`
    
}

