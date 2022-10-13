package shared

type UpdateTaskRequest struct {
	CloudWatchLogGroupArn *string       `json:"CloudWatchLogGroupArn"`
	Excludes              []FilterRule  `json:"Excludes"`
	Includes              []FilterRule  `json:"Includes"`
	Name                  *string       `json:"Name"`
	Options               *Options      `json:"Options"`
	Schedule              *TaskSchedule `json:"Schedule"`
	TaskArn               string        `json:"TaskArn"`
}
