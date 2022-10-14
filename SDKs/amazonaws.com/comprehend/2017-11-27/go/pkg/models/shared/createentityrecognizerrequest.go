package shared

type CreateEntityRecognizerRequest struct {
	ClientRequestToken *string                         `json:"ClientRequestToken,omitempty"`
	DataAccessRoleArn  string                          `json:"DataAccessRoleArn"`
	InputDataConfig    EntityRecognizerInputDataConfig `json:"InputDataConfig"`
	LanguageCode       LanguageCodeEnum                `json:"LanguageCode"`
	ModelKmsKeyID      *string                         `json:"ModelKmsKeyId,omitempty"`
	RecognizerName     string                          `json:"RecognizerName"`
	Tags               []Tag                           `json:"Tags,omitempty"`
	VolumeKmsKeyID     *string                         `json:"VolumeKmsKeyId,omitempty"`
	VpcConfig          *VpcConfig                      `json:"VpcConfig,omitempty"`
}
