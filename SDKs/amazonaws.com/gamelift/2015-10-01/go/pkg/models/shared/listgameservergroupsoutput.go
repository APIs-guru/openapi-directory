package shared

type ListGameServerGroupsOutput struct {
	GameServerGroups []GameServerGroup `json:"GameServerGroups"`
	NextToken        *string           `json:"NextToken"`
}
