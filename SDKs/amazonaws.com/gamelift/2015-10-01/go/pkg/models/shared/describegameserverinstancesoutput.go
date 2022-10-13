package shared

type DescribeGameServerInstancesOutput struct {
	GameServerInstances []GameServerInstance `json:"GameServerInstances"`
	NextToken           *string              `json:"NextToken"`
}
