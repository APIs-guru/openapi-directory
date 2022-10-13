package shared

type StartKeyPhrasesDetectionJobRequest struct {
	ClientRequestToken *string          `json:"ClientRequestToken"`
	DataAccessRoleArn  string           `json:"DataAccessRoleArn"`
	InputDataConfig    InputDataConfig  `json:"InputDataConfig"`
	JobName            *string          `json:"JobName"`
	LanguageCode       LanguageCodeEnum `json:"LanguageCode"`
	OutputDataConfig   OutputDataConfig `json:"OutputDataConfig"`
	Tags               []Tag            `json:"Tags"`
	VolumeKmsKeyID     *string          `json:"VolumeKmsKeyId"`
	VpcConfig          *VpcConfig       `json:"VpcConfig"`
}
