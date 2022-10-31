package shared



type SybaseSettings struct {
    DatabaseName *string `json:"DatabaseName,omitempty"`
    Password *string `json:"Password,omitempty"`
    Port *int64 `json:"Port,omitempty"`
    SecretsManagerAccessRoleArn *string `json:"SecretsManagerAccessRoleArn,omitempty"`
    SecretsManagerSecretID *string `json:"SecretsManagerSecretId,omitempty"`
    ServerName *string `json:"ServerName,omitempty"`
    Username *string `json:"Username,omitempty"`
    
}

