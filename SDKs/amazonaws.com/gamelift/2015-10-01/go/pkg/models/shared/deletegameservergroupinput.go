package shared



type DeleteGameServerGroupInput struct {
    DeleteOption *GameServerGroupDeleteOptionEnum `json:"DeleteOption,omitempty"`
    GameServerGroupName string `json:"GameServerGroupName"`
    
}

