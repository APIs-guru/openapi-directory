package shared

type ListMemberAccountsResponse struct {
	MemberAccounts []string `json:"MemberAccounts"`
	NextToken      *string  `json:"NextToken"`
}
