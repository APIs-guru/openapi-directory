package shared

type ListMembersResponse struct {
	MemberDetails []MemberDetail `json:"MemberDetails"`
	NextToken     *string        `json:"NextToken"`
}
