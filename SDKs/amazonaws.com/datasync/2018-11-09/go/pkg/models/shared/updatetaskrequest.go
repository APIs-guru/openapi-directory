package shared

// UpdateTaskRequest
// UpdateTaskResponse
type UpdateTaskRequest struct {
	CloudWatchLogGroupArn *string       `json:"CloudWatchLogGroupArn,omitempty"`
	Excludes              []FilterRule  `json:"Excludes,omitempty"`
	Includes              []FilterRule  `json:"Includes,omitempty"`
	Name                  *string       `json:"Name,omitempty"`
	Options               *Options      `json:"Options,omitempty"`
	Schedule              *TaskSchedule `json:"Schedule,omitempty"`
	TaskArn               string        `json:"TaskArn"`
}
