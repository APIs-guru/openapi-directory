package shared

type CreateDocumentClassifierRequest struct {
	ClientRequestToken     *string                             `json:"ClientRequestToken,omitempty"`
	DataAccessRoleArn      string                              `json:"DataAccessRoleArn"`
	DocumentClassifierName string                              `json:"DocumentClassifierName"`
	InputDataConfig        DocumentClassifierInputDataConfig   `json:"InputDataConfig"`
	LanguageCode           LanguageCodeEnum                    `json:"LanguageCode"`
	Mode                   *DocumentClassifierModeEnum         `json:"Mode,omitempty"`
	ModelKmsKeyID          *string                             `json:"ModelKmsKeyId,omitempty"`
	OutputDataConfig       *DocumentClassifierOutputDataConfig `json:"OutputDataConfig,omitempty"`
	Tags                   []Tag                               `json:"Tags,omitempty"`
	VolumeKmsKeyID         *string                             `json:"VolumeKmsKeyId,omitempty"`
	VpcConfig              *VpcConfig                          `json:"VpcConfig,omitempty"`
}
