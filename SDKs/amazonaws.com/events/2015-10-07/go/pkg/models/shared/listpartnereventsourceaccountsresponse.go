package shared

type ListPartnerEventSourceAccountsResponse struct {
	NextToken                  *string                     `json:"NextToken"`
	PartnerEventSourceAccounts []PartnerEventSourceAccount `json:"PartnerEventSourceAccounts"`
}
