package shared

type ListInvitationsResponse struct {
	Invitations []MemberDetail `json:"Invitations"`
	NextToken   *string        `json:"NextToken"`
}
