package shared

type CreateConnectionRequest struct {
	Bandwidth      string  `json:"bandwidth"`
	ConnectionName string  `json:"connectionName"`
	LagID          *string `json:"lagId"`
	Location       string  `json:"location"`
	ProviderName   *string `json:"providerName"`
	RequestMacSec  *bool   `json:"requestMACSec"`
	Tags           []Tag   `json:"tags"`
}
