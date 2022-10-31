package shared

import (
"time")

type Notification struct {
    AssessmentID *string `json:"assessmentId,omitempty"`
    AssessmentName *string `json:"assessmentName,omitempty"`
    ControlSetID *string `json:"controlSetId,omitempty"`
    ControlSetName *string `json:"controlSetName,omitempty"`
    Description *string `json:"description,omitempty"`
    EventTime *time.Time `json:"eventTime,omitempty"`
    ID *string `json:"id,omitempty"`
    Source *string `json:"source,omitempty"`
    
}

