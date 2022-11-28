package shared

// SupportedEndpointType
// Provides information about types of supported endpoints in response to a request by the <code>DescribeEndpointTypes</code> operation. This information includes the type of endpoint, the database engine name, and whether change data capture (CDC) is supported.
type SupportedEndpointType struct {
	EndpointType                            *ReplicationEndpointTypeValueEnum `json:"EndpointType,omitempty"`
	EngineDisplayName                       *string                           `json:"EngineDisplayName,omitempty"`
	EngineName                              *string                           `json:"EngineName,omitempty"`
	ReplicationInstanceEngineMinimumVersion *string                           `json:"ReplicationInstanceEngineMinimumVersion,omitempty"`
	SupportsCdc                             *bool                             `json:"SupportsCDC,omitempty"`
}
