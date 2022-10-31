package shared



type ListGameServerGroupsOutput struct {
    GameServerGroups []GameServerGroup `json:"GameServerGroups,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

