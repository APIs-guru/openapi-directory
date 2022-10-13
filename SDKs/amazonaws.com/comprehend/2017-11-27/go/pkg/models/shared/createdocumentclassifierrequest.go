package shared

type CreateDocumentClassifierRequest struct {
	ClientRequestToken     *string                             `json:"ClientRequestToken"`
	DataAccessRoleArn      string                              `json:"DataAccessRoleArn"`
	DocumentClassifierName string                              `json:"DocumentClassifierName"`
	InputDataConfig        DocumentClassifierInputDataConfig   `json:"InputDataConfig"`
	LanguageCode           LanguageCodeEnum                    `json:"LanguageCode"`
	Mode                   *DocumentClassifierModeEnum         `json:"Mode"`
	ModelKmsKeyID          *string                             `json:"ModelKmsKeyId"`
	OutputDataConfig       *DocumentClassifierOutputDataConfig `json:"OutputDataConfig"`
	Tags                   []Tag                               `json:"Tags"`
	VolumeKmsKeyID         *string                             `json:"VolumeKmsKeyId"`
	VpcConfig              *VpcConfig                          `json:"VpcConfig"`
}
