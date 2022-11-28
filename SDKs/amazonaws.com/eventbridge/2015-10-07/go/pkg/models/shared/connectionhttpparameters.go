package shared

// ConnectionHTTPParameters
// Contains additional parameters for the connection.
type ConnectionHTTPParameters struct {
	BodyParameters        []ConnectionBodyParameter        `json:"BodyParameters,omitempty"`
	HeaderParameters      []ConnectionHeaderParameter      `json:"HeaderParameters,omitempty"`
	QueryStringParameters []ConnectionQueryStringParameter `json:"QueryStringParameters,omitempty"`
}
