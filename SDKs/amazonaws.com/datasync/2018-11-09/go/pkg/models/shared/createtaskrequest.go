package shared

type CreateTaskRequest struct {
	CloudWatchLogGroupArn  *string        `json:"CloudWatchLogGroupArn"`
	DestinationLocationArn string         `json:"DestinationLocationArn"`
	Excludes               []FilterRule   `json:"Excludes"`
	Includes               []FilterRule   `json:"Includes"`
	Name                   *string        `json:"Name"`
	Options                *Options       `json:"Options"`
	Schedule               *TaskSchedule  `json:"Schedule"`
	SourceLocationArn      string         `json:"SourceLocationArn"`
	Tags                   []TagListEntry `json:"Tags"`
}
