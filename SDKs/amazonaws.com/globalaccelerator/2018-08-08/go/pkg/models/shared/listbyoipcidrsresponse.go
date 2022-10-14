package shared

type ListByoipCidrsResponse struct {
	ByoipCidrs []ByoipCidr `json:"ByoipCidrs,omitempty"`
	NextToken  *string     `json:"NextToken,omitempty"`
}
