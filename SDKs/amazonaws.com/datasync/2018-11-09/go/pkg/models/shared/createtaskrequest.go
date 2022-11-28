package shared

// CreateTaskRequest
// CreateTaskRequest
type CreateTaskRequest struct {
	CloudWatchLogGroupArn  *string        `json:"CloudWatchLogGroupArn,omitempty"`
	DestinationLocationArn string         `json:"DestinationLocationArn"`
	Excludes               []FilterRule   `json:"Excludes,omitempty"`
	Includes               []FilterRule   `json:"Includes,omitempty"`
	Name                   *string        `json:"Name,omitempty"`
	Options                *Options       `json:"Options,omitempty"`
	Schedule               *TaskSchedule  `json:"Schedule,omitempty"`
	SourceLocationArn      string         `json:"SourceLocationArn"`
	Tags                   []TagListEntry `json:"Tags,omitempty"`
}
