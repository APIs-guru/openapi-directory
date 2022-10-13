package shared

type SybaseSettings struct {
	DatabaseName                *string `json:"DatabaseName"`
	Password                    *string `json:"Password"`
	Port                        *int64  `json:"Port"`
	SecretsManagerAccessRoleArn *string `json:"SecretsManagerAccessRoleArn"`
	SecretsManagerSecretID      *string `json:"SecretsManagerSecretId"`
	ServerName                  *string `json:"ServerName"`
	Username                    *string `json:"Username"`
}
