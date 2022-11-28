package shared

// InforNexusConnectorProfileCredentials
//
//	The connector-specific profile credentials required by Infor Nexus.
type InforNexusConnectorProfileCredentials struct {
	AccessKeyID     string `json:"accessKeyId"`
	Datakey         string `json:"datakey"`
	SecretAccessKey string `json:"secretAccessKey"`
	UserID          string `json:"userId"`
}
