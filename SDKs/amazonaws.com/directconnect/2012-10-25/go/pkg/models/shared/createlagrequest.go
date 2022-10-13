package shared

type CreateLagRequest struct {
	ChildConnectionTags  []Tag   `json:"childConnectionTags"`
	ConnectionID         *string `json:"connectionId"`
	ConnectionsBandwidth string  `json:"connectionsBandwidth"`
	LagName              string  `json:"lagName"`
	Location             string  `json:"location"`
	NumberOfConnections  int64   `json:"numberOfConnections"`
	ProviderName         *string `json:"providerName"`
	RequestMacSec        *bool   `json:"requestMACSec"`
	Tags                 []Tag   `json:"tags"`
}
