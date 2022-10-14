package shared

type DeleteMembersResponse struct {
	AccountIds          []string             `json:"AccountIds,omitempty"`
	UnprocessedAccounts []UnprocessedAccount `json:"UnprocessedAccounts,omitempty"`
}
