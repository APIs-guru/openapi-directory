package shared

// Schedule
// A scheduling object using a <code>cron</code> statement to schedule an event.
type Schedule struct {
	ScheduleExpression *string            `json:"ScheduleExpression,omitempty"`
	State              *ScheduleStateEnum `json:"State,omitempty"`
}
