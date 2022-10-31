package shared

type PutDefaultEncryptionConfigurationResponse struct {
	ConfigurationStatus ConfigurationStatus `json:"configurationStatus"`
	EncryptionType      EncryptionTypeEnum  `json:"encryptionType"`
	KmsKeyArn           *string             `json:"kmsKeyArn,omitempty"`
}
