package shared

type StartTaskExecutionRequest struct {
	Excludes        []FilterRule `json:"Excludes"`
	Includes        []FilterRule `json:"Includes"`
	OverrideOptions *Options     `json:"OverrideOptions"`
	TaskArn         string       `json:"TaskArn"`
}
