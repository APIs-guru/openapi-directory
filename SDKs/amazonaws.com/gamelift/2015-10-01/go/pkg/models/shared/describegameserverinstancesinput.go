package shared

type DescribeGameServerInstancesInput struct {
	GameServerGroupName string   `json:"GameServerGroupName"`
	InstanceIds         []string `json:"InstanceIds"`
	Limit               *int64   `json:"Limit"`
	NextToken           *string  `json:"NextToken"`
}
