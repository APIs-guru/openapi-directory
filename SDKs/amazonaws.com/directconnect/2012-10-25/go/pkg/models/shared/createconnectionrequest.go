package shared

type CreateConnectionRequest struct {
	Bandwidth      string  `json:"bandwidth"`
	ConnectionName string  `json:"connectionName"`
	LagID          *string `json:"lagId,omitempty"`
	Location       string  `json:"location"`
	ProviderName   *string `json:"providerName,omitempty"`
	RequestMacSec  *bool   `json:"requestMACSec,omitempty"`
	Tags           []Tag   `json:"tags,omitempty"`
}
