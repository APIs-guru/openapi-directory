package shared

type StartTopicsDetectionJobRequest struct {
	ClientRequestToken *string          `json:"ClientRequestToken"`
	DataAccessRoleArn  string           `json:"DataAccessRoleArn"`
	InputDataConfig    InputDataConfig  `json:"InputDataConfig"`
	JobName            *string          `json:"JobName"`
	NumberOfTopics     *int64           `json:"NumberOfTopics"`
	OutputDataConfig   OutputDataConfig `json:"OutputDataConfig"`
	Tags               []Tag            `json:"Tags"`
	VolumeKmsKeyID     *string          `json:"VolumeKmsKeyId"`
	VpcConfig          *VpcConfig       `json:"VpcConfig"`
}
