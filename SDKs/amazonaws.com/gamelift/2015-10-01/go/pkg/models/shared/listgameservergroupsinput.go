package shared

type ListGameServerGroupsInput struct {
	Limit     *int64  `json:"Limit"`
	NextToken *string `json:"NextToken"`
}
