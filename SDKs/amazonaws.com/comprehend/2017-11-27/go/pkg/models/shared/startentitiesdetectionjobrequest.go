package shared

type StartEntitiesDetectionJobRequest struct {
	ClientRequestToken  *string          `json:"ClientRequestToken,omitempty"`
	DataAccessRoleArn   string           `json:"DataAccessRoleArn"`
	EntityRecognizerArn *string          `json:"EntityRecognizerArn,omitempty"`
	InputDataConfig     InputDataConfig  `json:"InputDataConfig"`
	JobName             *string          `json:"JobName,omitempty"`
	LanguageCode        LanguageCodeEnum `json:"LanguageCode"`
	OutputDataConfig    OutputDataConfig `json:"OutputDataConfig"`
	Tags                []Tag            `json:"Tags,omitempty"`
	VolumeKmsKeyID      *string          `json:"VolumeKmsKeyId,omitempty"`
	VpcConfig           *VpcConfig       `json:"VpcConfig,omitempty"`
}
