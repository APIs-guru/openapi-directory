package shared

type IbmDb2Settings struct {
	CurrentLsn                  *string `json:"CurrentLsn,omitempty"`
	DatabaseName                *string `json:"DatabaseName,omitempty"`
	MaxKBytesPerRead            *int64  `json:"MaxKBytesPerRead,omitempty"`
	Password                    *string `json:"Password,omitempty"`
	Port                        *int64  `json:"Port,omitempty"`
	SecretsManagerAccessRoleArn *string `json:"SecretsManagerAccessRoleArn,omitempty"`
	SecretsManagerSecretID      *string `json:"SecretsManagerSecretId,omitempty"`
	ServerName                  *string `json:"ServerName,omitempty"`
	SetDataCaptureChanges       *bool   `json:"SetDataCaptureChanges,omitempty"`
	Username                    *string `json:"Username,omitempty"`
}
