package shared

import (
	"time"
)

type Notification struct {
	AssessmentID   *string    `json:"assessmentId"`
	AssessmentName *string    `json:"assessmentName"`
	ControlSetID   *string    `json:"controlSetId"`
	ControlSetName *string    `json:"controlSetName"`
	Description    *string    `json:"description"`
	EventTime      *time.Time `json:"eventTime"`
	ID             *string    `json:"id"`
	Source         *string    `json:"source"`
}
