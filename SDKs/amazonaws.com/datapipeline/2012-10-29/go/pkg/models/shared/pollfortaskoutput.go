package shared

// PollForTaskOutput
// Contains the output of PollForTask.
type PollForTaskOutput struct {
	TaskObject *TaskObject `json:"taskObject,omitempty"`
}
