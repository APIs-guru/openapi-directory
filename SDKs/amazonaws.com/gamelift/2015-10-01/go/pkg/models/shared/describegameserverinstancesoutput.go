package shared

type DescribeGameServerInstancesOutput struct {
	GameServerInstances []GameServerInstance `json:"GameServerInstances,omitempty"`
	NextToken           *string              `json:"NextToken,omitempty"`
}
