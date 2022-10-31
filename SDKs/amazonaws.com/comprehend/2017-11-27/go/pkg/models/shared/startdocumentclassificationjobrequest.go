package shared

type StartDocumentClassificationJobRequest struct {
	ClientRequestToken    *string          `json:"ClientRequestToken,omitempty"`
	DataAccessRoleArn     string           `json:"DataAccessRoleArn"`
	DocumentClassifierArn string           `json:"DocumentClassifierArn"`
	InputDataConfig       InputDataConfig  `json:"InputDataConfig"`
	JobName               *string          `json:"JobName,omitempty"`
	OutputDataConfig      OutputDataConfig `json:"OutputDataConfig"`
	Tags                  []Tag            `json:"Tags,omitempty"`
	VolumeKmsKeyID        *string          `json:"VolumeKmsKeyId,omitempty"`
	VpcConfig             *VpcConfig       `json:"VpcConfig,omitempty"`
}
