package shared

type StartEntitiesDetectionV2JobRequest struct {
	ClientRequestToken *string          `json:"ClientRequestToken"`
	DataAccessRoleArn  string           `json:"DataAccessRoleArn"`
	InputDataConfig    InputDataConfig  `json:"InputDataConfig"`
	JobName            *string          `json:"JobName"`
	KmsKey             *string          `json:"KMSKey"`
	LanguageCode       LanguageCodeEnum `json:"LanguageCode"`
	OutputDataConfig   OutputDataConfig `json:"OutputDataConfig"`
}
