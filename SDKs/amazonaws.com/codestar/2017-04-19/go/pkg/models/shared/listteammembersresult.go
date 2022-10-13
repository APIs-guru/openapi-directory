package shared

type ListTeamMembersResult struct {
	NextToken   *string      `json:"nextToken"`
	TeamMembers []TeamMember `json:"teamMembers"`
}
