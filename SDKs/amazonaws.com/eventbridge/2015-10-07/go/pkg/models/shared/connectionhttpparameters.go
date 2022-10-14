package shared

type ConnectionHTTPParameters struct {
	BodyParameters        []ConnectionBodyParameter        `json:"BodyParameters,omitempty"`
	HeaderParameters      []ConnectionHeaderParameter      `json:"HeaderParameters,omitempty"`
	QueryStringParameters []ConnectionQueryStringParameter `json:"QueryStringParameters,omitempty"`
}
