package shared

// HTTPEndpointRequestConfiguration
// The configuration of the HTTP endpoint request.
type HTTPEndpointRequestConfiguration struct {
	CommonAttributes []HTTPEndpointCommonAttribute `json:"CommonAttributes,omitempty"`
	ContentEncoding  *ContentEncodingEnum          `json:"ContentEncoding,omitempty"`
}
