package shared

// DescribeInstancesInput
// Represents the input for a request operation.
type DescribeInstancesInput struct {
	FleetID    string  `json:"FleetId"`
	InstanceID *string `json:"InstanceId,omitempty"`
	Limit      *int64  `json:"Limit,omitempty"`
	Location   *string `json:"Location,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}
