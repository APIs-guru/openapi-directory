package shared

type IbmDb2Settings struct {
	CurrentLsn                  *string `json:"CurrentLsn"`
	DatabaseName                *string `json:"DatabaseName"`
	MaxKBytesPerRead            *int64  `json:"MaxKBytesPerRead"`
	Password                    *string `json:"Password"`
	Port                        *int64  `json:"Port"`
	SecretsManagerAccessRoleArn *string `json:"SecretsManagerAccessRoleArn"`
	SecretsManagerSecretID      *string `json:"SecretsManagerSecretId"`
	ServerName                  *string `json:"ServerName"`
	SetDataCaptureChanges       *bool   `json:"SetDataCaptureChanges"`
	Username                    *string `json:"Username"`
}
