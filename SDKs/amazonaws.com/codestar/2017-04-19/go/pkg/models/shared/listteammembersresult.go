package shared

type ListTeamMembersResult struct {
	NextToken   *string      `json:"nextToken,omitempty"`
	TeamMembers []TeamMember `json:"teamMembers"`
}
