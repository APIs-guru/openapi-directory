package shared

// DocDbSettings
// Provides information that defines a DocumentDB endpoint.
type DocDbSettings struct {
	DatabaseName                *string                `json:"DatabaseName,omitempty"`
	DocsToInvestigate           *int64                 `json:"DocsToInvestigate,omitempty"`
	ExtractDocID                *bool                  `json:"ExtractDocId,omitempty"`
	KmsKeyID                    *string                `json:"KmsKeyId,omitempty"`
	NestingLevel                *NestingLevelValueEnum `json:"NestingLevel,omitempty"`
	Password                    *string                `json:"Password,omitempty"`
	Port                        *int64                 `json:"Port,omitempty"`
	SecretsManagerAccessRoleArn *string                `json:"SecretsManagerAccessRoleArn,omitempty"`
	SecretsManagerSecretID      *string                `json:"SecretsManagerSecretId,omitempty"`
	ServerName                  *string                `json:"ServerName,omitempty"`
	Username                    *string                `json:"Username,omitempty"`
}
