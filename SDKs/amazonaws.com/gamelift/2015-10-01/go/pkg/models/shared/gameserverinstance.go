package shared

type GameServerInstance struct {
	GameServerGroupArn  *string                       `json:"GameServerGroupArn"`
	GameServerGroupName *string                       `json:"GameServerGroupName"`
	InstanceID          *string                       `json:"InstanceId"`
	InstanceStatus      *GameServerInstanceStatusEnum `json:"InstanceStatus"`
}
