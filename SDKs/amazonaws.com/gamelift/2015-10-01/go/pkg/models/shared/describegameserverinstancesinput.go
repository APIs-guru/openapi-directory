package shared

type DescribeGameServerInstancesInput struct {
	GameServerGroupName string   `json:"GameServerGroupName"`
	InstanceIds         []string `json:"InstanceIds,omitempty"`
	Limit               *int64   `json:"Limit,omitempty"`
	NextToken           *string  `json:"NextToken,omitempty"`
}
