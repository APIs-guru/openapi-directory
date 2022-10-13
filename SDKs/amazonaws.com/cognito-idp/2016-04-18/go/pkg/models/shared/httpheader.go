package shared

type HTTPHeader struct {
	HeaderName  *string `json:"headerName"`
	HeaderValue *string `json:"headerValue"`
}
