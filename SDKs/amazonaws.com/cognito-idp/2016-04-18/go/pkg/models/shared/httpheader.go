package shared

// HTTPHeader
// The HTTP header.
type HTTPHeader struct {
	HeaderName  *string `json:"headerName,omitempty"`
	HeaderValue *string `json:"headerValue,omitempty"`
}
