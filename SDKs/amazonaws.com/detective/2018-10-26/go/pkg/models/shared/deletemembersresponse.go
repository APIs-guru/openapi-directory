package shared

type DeleteMembersResponse struct {
	AccountIds          []string             `json:"AccountIds"`
	UnprocessedAccounts []UnprocessedAccount `json:"UnprocessedAccounts"`
}
