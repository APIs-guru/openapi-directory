package shared

type ListInvitationsResponse struct {
	Invitations []MemberDetail `json:"Invitations,omitempty"`
	NextToken   *string        `json:"NextToken,omitempty"`
}
