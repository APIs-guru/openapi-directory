package shared



type MySQLSettings struct {
    AfterConnectScript *string `json:"AfterConnectScript,omitempty"`
    CleanSourceMetadataOnMismatch *bool `json:"CleanSourceMetadataOnMismatch,omitempty"`
    DatabaseName *string `json:"DatabaseName,omitempty"`
    EventsPollInterval *int64 `json:"EventsPollInterval,omitempty"`
    MaxFileSize *int64 `json:"MaxFileSize,omitempty"`
    ParallelLoadThreads *int64 `json:"ParallelLoadThreads,omitempty"`
    Password *string `json:"Password,omitempty"`
    Port *int64 `json:"Port,omitempty"`
    SecretsManagerAccessRoleArn *string `json:"SecretsManagerAccessRoleArn,omitempty"`
    SecretsManagerSecretID *string `json:"SecretsManagerSecretId,omitempty"`
    ServerName *string `json:"ServerName,omitempty"`
    ServerTimezone *string `json:"ServerTimezone,omitempty"`
    TargetDbType *TargetDbTypeEnum `json:"TargetDbType,omitempty"`
    Username *string `json:"Username,omitempty"`
    
}

