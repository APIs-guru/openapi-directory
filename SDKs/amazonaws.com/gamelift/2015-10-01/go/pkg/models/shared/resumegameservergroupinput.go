package shared



type ResumeGameServerGroupInput struct {
    GameServerGroupName string `json:"GameServerGroupName"`
    ResumeActions []GameServerGroupActionEnum `json:"ResumeActions"`
    
}

