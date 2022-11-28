package shared

// Schedule
// The schedule for when to trigger an update.
type Schedule struct {
	Expression *string `json:"expression,omitempty"`
}
