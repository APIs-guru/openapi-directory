package shared

type SupportedEndpointType struct {
	EndpointType                            *ReplicationEndpointTypeValueEnum `json:"EndpointType,omitempty"`
	EngineDisplayName                       *string                           `json:"EngineDisplayName,omitempty"`
	EngineName                              *string                           `json:"EngineName,omitempty"`
	ReplicationInstanceEngineMinimumVersion *string                           `json:"ReplicationInstanceEngineMinimumVersion,omitempty"`
	SupportsCdc                             *bool                             `json:"SupportsCDC,omitempty"`
}
