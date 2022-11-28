package shared

// Task
// Task object encapsulating task information.
type Task struct {
	ProgressPercent *int64     `json:"ProgressPercent,omitempty"`
	Status          StatusEnum `json:"Status"`
	StatusDetail    *string    `json:"StatusDetail,omitempty"`
}
