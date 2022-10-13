package shared

type SupportedEndpointType struct {
	EndpointType                            *ReplicationEndpointTypeValueEnum `json:"EndpointType"`
	EngineDisplayName                       *string                           `json:"EngineDisplayName"`
	EngineName                              *string                           `json:"EngineName"`
	ReplicationInstanceEngineMinimumVersion *string                           `json:"ReplicationInstanceEngineMinimumVersion"`
	SupportsCdc                             *bool                             `json:"SupportsCDC"`
}
