package shared

type ListTeamMembersRequest struct {
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
	ProjectID  string  `json:"projectId"`
}
