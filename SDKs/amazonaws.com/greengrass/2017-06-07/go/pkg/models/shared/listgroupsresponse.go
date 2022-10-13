package shared

type ListGroupsResponse struct {
	Groups    []GroupInformation `json:"Groups"`
	NextToken *string            `json:"NextToken"`
}
