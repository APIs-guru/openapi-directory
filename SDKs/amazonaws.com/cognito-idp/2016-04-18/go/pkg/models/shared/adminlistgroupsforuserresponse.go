package shared

type AdminListGroupsForUserResponse struct {
	Groups    []GroupType `json:"Groups"`
	NextToken *string     `json:"NextToken"`
}
