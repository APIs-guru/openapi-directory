package shared

type StartEntitiesDetectionJobRequest struct {
	ClientRequestToken  *string          `json:"ClientRequestToken"`
	DataAccessRoleArn   string           `json:"DataAccessRoleArn"`
	EntityRecognizerArn *string          `json:"EntityRecognizerArn"`
	InputDataConfig     InputDataConfig  `json:"InputDataConfig"`
	JobName             *string          `json:"JobName"`
	LanguageCode        LanguageCodeEnum `json:"LanguageCode"`
	OutputDataConfig    OutputDataConfig `json:"OutputDataConfig"`
	Tags                []Tag            `json:"Tags"`
	VolumeKmsKeyID      *string          `json:"VolumeKmsKeyId"`
	VpcConfig           *VpcConfig       `json:"VpcConfig"`
}
