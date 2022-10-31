package shared



type PostgreSQLSettings struct {
    AfterConnectScript *string `json:"AfterConnectScript,omitempty"`
    CaptureDdls *bool `json:"CaptureDdls,omitempty"`
    DatabaseName *string `json:"DatabaseName,omitempty"`
    DdlArtifactsSchema *string `json:"DdlArtifactsSchema,omitempty"`
    ExecuteTimeout *int64 `json:"ExecuteTimeout,omitempty"`
    FailTasksOnLobTruncation *bool `json:"FailTasksOnLobTruncation,omitempty"`
    HeartbeatEnable *bool `json:"HeartbeatEnable,omitempty"`
    HeartbeatFrequency *int64 `json:"HeartbeatFrequency,omitempty"`
    HeartbeatSchema *string `json:"HeartbeatSchema,omitempty"`
    MaxFileSize *int64 `json:"MaxFileSize,omitempty"`
    Password *string `json:"Password,omitempty"`
    PluginName *PluginNameValueEnum `json:"PluginName,omitempty"`
    Port *int64 `json:"Port,omitempty"`
    SecretsManagerAccessRoleArn *string `json:"SecretsManagerAccessRoleArn,omitempty"`
    SecretsManagerSecretID *string `json:"SecretsManagerSecretId,omitempty"`
    ServerName *string `json:"ServerName,omitempty"`
    SlotName *string `json:"SlotName,omitempty"`
    Username *string `json:"Username,omitempty"`
    
}

