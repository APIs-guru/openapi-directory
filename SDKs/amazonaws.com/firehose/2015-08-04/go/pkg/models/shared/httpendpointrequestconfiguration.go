package shared

type HTTPEndpointRequestConfiguration struct {
	CommonAttributes []HTTPEndpointCommonAttribute `json:"CommonAttributes,omitempty"`
	ContentEncoding  *ContentEncodingEnum          `json:"ContentEncoding,omitempty"`
}
