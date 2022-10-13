package shared

type PostgreSQLSettings struct {
	AfterConnectScript          *string              `json:"AfterConnectScript"`
	CaptureDdls                 *bool                `json:"CaptureDdls"`
	DatabaseName                *string              `json:"DatabaseName"`
	DdlArtifactsSchema          *string              `json:"DdlArtifactsSchema"`
	ExecuteTimeout              *int64               `json:"ExecuteTimeout"`
	FailTasksOnLobTruncation    *bool                `json:"FailTasksOnLobTruncation"`
	HeartbeatEnable             *bool                `json:"HeartbeatEnable"`
	HeartbeatFrequency          *int64               `json:"HeartbeatFrequency"`
	HeartbeatSchema             *string              `json:"HeartbeatSchema"`
	MaxFileSize                 *int64               `json:"MaxFileSize"`
	Password                    *string              `json:"Password"`
	PluginName                  *PluginNameValueEnum `json:"PluginName"`
	Port                        *int64               `json:"Port"`
	SecretsManagerAccessRoleArn *string              `json:"SecretsManagerAccessRoleArn"`
	SecretsManagerSecretID      *string              `json:"SecretsManagerSecretId"`
	ServerName                  *string              `json:"ServerName"`
	SlotName                    *string              `json:"SlotName"`
	Username                    *string              `json:"Username"`
}
