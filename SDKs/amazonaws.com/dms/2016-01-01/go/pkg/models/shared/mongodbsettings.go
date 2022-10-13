package shared

type MongoDbSettings struct {
	AuthMechanism               *AuthMechanismValueEnum `json:"AuthMechanism"`
	AuthSource                  *string                 `json:"AuthSource"`
	AuthType                    *AuthTypeValueEnum      `json:"AuthType"`
	DatabaseName                *string                 `json:"DatabaseName"`
	DocsToInvestigate           *string                 `json:"DocsToInvestigate"`
	ExtractDocID                *string                 `json:"ExtractDocId"`
	KmsKeyID                    *string                 `json:"KmsKeyId"`
	NestingLevel                *NestingLevelValueEnum  `json:"NestingLevel"`
	Password                    *string                 `json:"Password"`
	Port                        *int64                  `json:"Port"`
	SecretsManagerAccessRoleArn *string                 `json:"SecretsManagerAccessRoleArn"`
	SecretsManagerSecretID      *string                 `json:"SecretsManagerSecretId"`
	ServerName                  *string                 `json:"ServerName"`
	Username                    *string                 `json:"Username"`
}
