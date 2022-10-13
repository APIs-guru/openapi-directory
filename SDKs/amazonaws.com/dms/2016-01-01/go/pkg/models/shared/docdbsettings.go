package shared

type DocDbSettings struct {
	DatabaseName                *string                `json:"DatabaseName"`
	DocsToInvestigate           *int64                 `json:"DocsToInvestigate"`
	ExtractDocID                *bool                  `json:"ExtractDocId"`
	KmsKeyID                    *string                `json:"KmsKeyId"`
	NestingLevel                *NestingLevelValueEnum `json:"NestingLevel"`
	Password                    *string                `json:"Password"`
	Port                        *int64                 `json:"Port"`
	SecretsManagerAccessRoleArn *string                `json:"SecretsManagerAccessRoleArn"`
	SecretsManagerSecretID      *string                `json:"SecretsManagerSecretId"`
	ServerName                  *string                `json:"ServerName"`
	Username                    *string                `json:"Username"`
}
