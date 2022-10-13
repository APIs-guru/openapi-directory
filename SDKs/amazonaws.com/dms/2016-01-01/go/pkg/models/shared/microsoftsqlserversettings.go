package shared

type MicrosoftSQLServerSettings struct {
	BcpPacketSize               *int64               `json:"BcpPacketSize"`
	ControlTablesFileGroup      *string              `json:"ControlTablesFileGroup"`
	DatabaseName                *string              `json:"DatabaseName"`
	Password                    *string              `json:"Password"`
	Port                        *int64               `json:"Port"`
	QuerySingleAlwaysOnNode     *bool                `json:"QuerySingleAlwaysOnNode"`
	ReadBackupOnly              *bool                `json:"ReadBackupOnly"`
	SafeguardPolicy             *SafeguardPolicyEnum `json:"SafeguardPolicy"`
	SecretsManagerAccessRoleArn *string              `json:"SecretsManagerAccessRoleArn"`
	SecretsManagerSecretID      *string              `json:"SecretsManagerSecretId"`
	ServerName                  *string              `json:"ServerName"`
	UseBcpFullLoad              *bool                `json:"UseBcpFullLoad"`
	UseThirdPartyBackupDevice   *bool                `json:"UseThirdPartyBackupDevice"`
	Username                    *string              `json:"Username"`
}
