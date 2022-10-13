package shared

type CreateMembersResponse struct {
	Members             []MemberDetail       `json:"Members"`
	UnprocessedAccounts []UnprocessedAccount `json:"UnprocessedAccounts"`
}
