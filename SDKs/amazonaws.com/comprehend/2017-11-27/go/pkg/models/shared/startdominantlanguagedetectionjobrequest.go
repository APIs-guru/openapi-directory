package shared

type StartDominantLanguageDetectionJobRequest struct {
	ClientRequestToken *string          `json:"ClientRequestToken"`
	DataAccessRoleArn  string           `json:"DataAccessRoleArn"`
	InputDataConfig    InputDataConfig  `json:"InputDataConfig"`
	JobName            *string          `json:"JobName"`
	OutputDataConfig   OutputDataConfig `json:"OutputDataConfig"`
	Tags               []Tag            `json:"Tags"`
	VolumeKmsKeyID     *string          `json:"VolumeKmsKeyId"`
	VpcConfig          *VpcConfig       `json:"VpcConfig"`
}
