package shared

type CreateEntityRecognizerRequest struct {
	ClientRequestToken *string                         `json:"ClientRequestToken"`
	DataAccessRoleArn  string                          `json:"DataAccessRoleArn"`
	InputDataConfig    EntityRecognizerInputDataConfig `json:"InputDataConfig"`
	LanguageCode       LanguageCodeEnum                `json:"LanguageCode"`
	ModelKmsKeyID      *string                         `json:"ModelKmsKeyId"`
	RecognizerName     string                          `json:"RecognizerName"`
	Tags               []Tag                           `json:"Tags"`
	VolumeKmsKeyID     *string                         `json:"VolumeKmsKeyId"`
	VpcConfig          *VpcConfig                      `json:"VpcConfig"`
}
