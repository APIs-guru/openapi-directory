package shared



type GetMembersResponse struct {
    MemberDetails []MemberDetail `json:"MemberDetails,omitempty"`
    UnprocessedAccounts []UnprocessedAccount `json:"UnprocessedAccounts,omitempty"`
    
}

