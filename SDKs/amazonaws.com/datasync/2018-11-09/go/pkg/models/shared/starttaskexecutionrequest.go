package shared

type StartTaskExecutionRequest struct {
	Excludes        []FilterRule `json:"Excludes,omitempty"`
	Includes        []FilterRule `json:"Includes,omitempty"`
	OverrideOptions *Options     `json:"OverrideOptions,omitempty"`
	TaskArn         string       `json:"TaskArn"`
}
