package shared

type StartPiiEntitiesDetectionJobRequest struct {
	ClientRequestToken *string                      `json:"ClientRequestToken"`
	DataAccessRoleArn  string                       `json:"DataAccessRoleArn"`
	InputDataConfig    InputDataConfig              `json:"InputDataConfig"`
	JobName            *string                      `json:"JobName"`
	LanguageCode       LanguageCodeEnum             `json:"LanguageCode"`
	Mode               PiiEntitiesDetectionModeEnum `json:"Mode"`
	OutputDataConfig   OutputDataConfig             `json:"OutputDataConfig"`
	RedactionConfig    *RedactionConfig             `json:"RedactionConfig"`
	Tags               []Tag                        `json:"Tags"`
}
