package shared

type MicrosoftSQLServerSettings struct {
	BcpPacketSize               *int64               `json:"BcpPacketSize,omitempty"`
	ControlTablesFileGroup      *string              `json:"ControlTablesFileGroup,omitempty"`
	DatabaseName                *string              `json:"DatabaseName,omitempty"`
	Password                    *string              `json:"Password,omitempty"`
	Port                        *int64               `json:"Port,omitempty"`
	QuerySingleAlwaysOnNode     *bool                `json:"QuerySingleAlwaysOnNode,omitempty"`
	ReadBackupOnly              *bool                `json:"ReadBackupOnly,omitempty"`
	SafeguardPolicy             *SafeguardPolicyEnum `json:"SafeguardPolicy,omitempty"`
	SecretsManagerAccessRoleArn *string              `json:"SecretsManagerAccessRoleArn,omitempty"`
	SecretsManagerSecretID      *string              `json:"SecretsManagerSecretId,omitempty"`
	ServerName                  *string              `json:"ServerName,omitempty"`
	UseBcpFullLoad              *bool                `json:"UseBcpFullLoad,omitempty"`
	UseThirdPartyBackupDevice   *bool                `json:"UseThirdPartyBackupDevice,omitempty"`
	Username                    *string              `json:"Username,omitempty"`
}
