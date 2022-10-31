package shared

type ListMemberAccountsResponse struct {
	MemberAccounts []string `json:"MemberAccounts,omitempty"`
	NextToken      *string  `json:"NextToken,omitempty"`
}
