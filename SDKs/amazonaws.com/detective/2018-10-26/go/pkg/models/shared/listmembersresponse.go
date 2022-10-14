package shared

type ListMembersResponse struct {
	MemberDetails []MemberDetail `json:"MemberDetails,omitempty"`
	NextToken     *string        `json:"NextToken,omitempty"`
}
