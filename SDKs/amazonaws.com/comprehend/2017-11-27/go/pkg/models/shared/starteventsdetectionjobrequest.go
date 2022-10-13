package shared

type StartEventsDetectionJobRequest struct {
	ClientRequestToken *string          `json:"ClientRequestToken"`
	DataAccessRoleArn  string           `json:"DataAccessRoleArn"`
	InputDataConfig    InputDataConfig  `json:"InputDataConfig"`
	JobName            *string          `json:"JobName"`
	LanguageCode       LanguageCodeEnum `json:"LanguageCode"`
	OutputDataConfig   OutputDataConfig `json:"OutputDataConfig"`
	Tags               []Tag            `json:"Tags"`
	TargetEventTypes   []string         `json:"TargetEventTypes"`
}
