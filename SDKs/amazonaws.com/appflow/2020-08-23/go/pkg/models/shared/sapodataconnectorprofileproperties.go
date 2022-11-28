package shared

// SapoDataConnectorProfileProperties
//
//	The connector-specific profile properties required when using SAPOData.
type SapoDataConnectorProfileProperties struct {
	ApplicationHostURL     string           `json:"applicationHostUrl"`
	ApplicationServicePath string           `json:"applicationServicePath"`
	ClientNumber           string           `json:"clientNumber"`
	LogonLanguage          *string          `json:"logonLanguage,omitempty"`
	OAuthProperties        *OAuthProperties `json:"oAuthProperties,omitempty"`
	PortNumber             int64            `json:"portNumber"`
	PrivateLinkServiceName *string          `json:"privateLinkServiceName,omitempty"`
}
