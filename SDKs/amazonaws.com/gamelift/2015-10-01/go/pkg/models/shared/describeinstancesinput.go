package shared

type DescribeInstancesInput struct {
	FleetID    string  `json:"FleetId"`
	InstanceID *string `json:"InstanceId"`
	Limit      *int64  `json:"Limit"`
	Location   *string `json:"Location"`
	NextToken  *string `json:"NextToken"`
}
