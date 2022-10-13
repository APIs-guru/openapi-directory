package shared

type ListByoipCidrsResponse struct {
	ByoipCidrs []ByoipCidr `json:"ByoipCidrs"`
	NextToken  *string     `json:"NextToken"`
}
