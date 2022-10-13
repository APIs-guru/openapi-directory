package shared

type ConnectionHTTPParameters struct {
	BodyParameters        []ConnectionBodyParameter        `json:"BodyParameters"`
	HeaderParameters      []ConnectionHeaderParameter      `json:"HeaderParameters"`
	QueryStringParameters []ConnectionQueryStringParameter `json:"QueryStringParameters"`
}
