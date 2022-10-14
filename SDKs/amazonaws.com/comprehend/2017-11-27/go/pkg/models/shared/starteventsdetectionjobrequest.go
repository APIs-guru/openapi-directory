package shared

type StartEventsDetectionJobRequest struct {
	ClientRequestToken *string          `json:"ClientRequestToken,omitempty"`
	DataAccessRoleArn  string           `json:"DataAccessRoleArn"`
	InputDataConfig    InputDataConfig  `json:"InputDataConfig"`
	JobName            *string          `json:"JobName,omitempty"`
	LanguageCode       LanguageCodeEnum `json:"LanguageCode"`
	OutputDataConfig   OutputDataConfig `json:"OutputDataConfig"`
	Tags               []Tag            `json:"Tags,omitempty"`
	TargetEventTypes   []string         `json:"TargetEventTypes"`
}
