package shared



type CreateMembersResponse struct {
    Members []MemberDetail `json:"Members,omitempty"`
    UnprocessedAccounts []UnprocessedAccount `json:"UnprocessedAccounts,omitempty"`
    
}

