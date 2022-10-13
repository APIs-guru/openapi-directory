package shared

type ListAPIKeysResponse struct {
	APIKeys   []APIKey `json:"apiKeys"`
	NextToken *string  `json:"nextToken"`
}
