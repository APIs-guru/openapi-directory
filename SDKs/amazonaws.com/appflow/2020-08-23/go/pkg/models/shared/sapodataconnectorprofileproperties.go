package shared

type SapoDataConnectorProfileProperties struct {
	ApplicationHostURL     string           `json:"applicationHostUrl"`
	ApplicationServicePath string           `json:"applicationServicePath"`
	ClientNumber           string           `json:"clientNumber"`
	LogonLanguage          *string          `json:"logonLanguage"`
	OAuthProperties        *OAuthProperties `json:"oAuthProperties"`
	PortNumber             int64            `json:"portNumber"`
	PrivateLinkServiceName *string          `json:"privateLinkServiceName"`
}
