package shared

type HTTPEndpointRequestConfiguration struct {
	CommonAttributes []HTTPEndpointCommonAttribute `json:"CommonAttributes"`
	ContentEncoding  *ContentEncodingEnum          `json:"ContentEncoding"`
}
