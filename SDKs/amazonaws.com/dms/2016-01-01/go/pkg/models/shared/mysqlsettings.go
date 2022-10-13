package shared

type MySQLSettings struct {
	AfterConnectScript            *string           `json:"AfterConnectScript"`
	CleanSourceMetadataOnMismatch *bool             `json:"CleanSourceMetadataOnMismatch"`
	DatabaseName                  *string           `json:"DatabaseName"`
	EventsPollInterval            *int64            `json:"EventsPollInterval"`
	MaxFileSize                   *int64            `json:"MaxFileSize"`
	ParallelLoadThreads           *int64            `json:"ParallelLoadThreads"`
	Password                      *string           `json:"Password"`
	Port                          *int64            `json:"Port"`
	SecretsManagerAccessRoleArn   *string           `json:"SecretsManagerAccessRoleArn"`
	SecretsManagerSecretID        *string           `json:"SecretsManagerSecretId"`
	ServerName                    *string           `json:"ServerName"`
	ServerTimezone                *string           `json:"ServerTimezone"`
	TargetDbType                  *TargetDbTypeEnum `json:"TargetDbType"`
	Username                      *string           `json:"Username"`
}
