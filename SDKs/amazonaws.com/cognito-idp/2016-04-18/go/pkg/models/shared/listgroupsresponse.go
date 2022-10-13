package shared

type ListGroupsResponse struct {
	Groups    []GroupType `json:"Groups"`
	NextToken *string     `json:"NextToken"`
}
