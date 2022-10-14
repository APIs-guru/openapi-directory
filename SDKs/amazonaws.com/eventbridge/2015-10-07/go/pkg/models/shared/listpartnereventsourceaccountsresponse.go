package shared

type ListPartnerEventSourceAccountsResponse struct {
	NextToken                  *string                     `json:"NextToken,omitempty"`
	PartnerEventSourceAccounts []PartnerEventSourceAccount `json:"PartnerEventSourceAccounts,omitempty"`
}
