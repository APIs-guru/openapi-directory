package shared

import (
	"time"
)

// Notification
//
//	The notification used to inform a user of an update in Audit Manager. For example, this includes the notification that is sent when a control set is delegated for review.
type Notification struct {
	AssessmentID   *string    `json:"assessmentId,omitempty"`
	AssessmentName *string    `json:"assessmentName,omitempty"`
	ControlSetID   *string    `json:"controlSetId,omitempty"`
	ControlSetName *string    `json:"controlSetName,omitempty"`
	Description    *string    `json:"description,omitempty"`
	EventTime      *time.Time `json:"eventTime,omitempty"`
	ID             *string    `json:"id,omitempty"`
	Source         *string    `json:"source,omitempty"`
}
