package shared



type GameServerInstance struct {
    GameServerGroupArn *string `json:"GameServerGroupArn,omitempty"`
    GameServerGroupName *string `json:"GameServerGroupName,omitempty"`
    InstanceID *string `json:"InstanceId,omitempty"`
    InstanceStatus *GameServerInstanceStatusEnum `json:"InstanceStatus,omitempty"`
    
}

