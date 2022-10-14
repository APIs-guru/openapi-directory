package shared

type ListAPIKeysResponse struct {
	APIKeys   []APIKey `json:"apiKeys,omitempty"`
	NextToken *string  `json:"nextToken,omitempty"`
}
