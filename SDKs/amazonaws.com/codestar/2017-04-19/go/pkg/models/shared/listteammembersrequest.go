package shared

type ListTeamMembersRequest struct {
	MaxResults *int64  `json:"maxResults,omitempty"`
	NextToken  *string `json:"nextToken,omitempty"`
	ProjectID  string  `json:"projectId"`
}
