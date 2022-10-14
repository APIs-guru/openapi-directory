package shared

type MongoDbSettings struct {
	AuthMechanism               *AuthMechanismValueEnum `json:"AuthMechanism,omitempty"`
	AuthSource                  *string                 `json:"AuthSource,omitempty"`
	AuthType                    *AuthTypeValueEnum      `json:"AuthType,omitempty"`
	DatabaseName                *string                 `json:"DatabaseName,omitempty"`
	DocsToInvestigate           *string                 `json:"DocsToInvestigate,omitempty"`
	ExtractDocID                *string                 `json:"ExtractDocId,omitempty"`
	KmsKeyID                    *string                 `json:"KmsKeyId,omitempty"`
	NestingLevel                *NestingLevelValueEnum  `json:"NestingLevel,omitempty"`
	Password                    *string                 `json:"Password,omitempty"`
	Port                        *int64                  `json:"Port,omitempty"`
	SecretsManagerAccessRoleArn *string                 `json:"SecretsManagerAccessRoleArn,omitempty"`
	SecretsManagerSecretID      *string                 `json:"SecretsManagerSecretId,omitempty"`
	ServerName                  *string                 `json:"ServerName,omitempty"`
	Username                    *string                 `json:"Username,omitempty"`
}
