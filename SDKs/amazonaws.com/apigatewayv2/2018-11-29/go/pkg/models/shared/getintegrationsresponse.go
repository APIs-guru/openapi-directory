package shared

type GetIntegrationsResponse struct {
	Items     []Integration `json:"Items,omitempty"`
	NextToken *string       `json:"NextToken,omitempty"`
}
