package shared

type GetMembersResponse struct {
	MemberDetails       []MemberDetail       `json:"MemberDetails"`
	UnprocessedAccounts []UnprocessedAccount `json:"UnprocessedAccounts"`
}
