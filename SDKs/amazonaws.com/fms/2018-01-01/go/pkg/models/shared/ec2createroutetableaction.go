package shared

// Ec2CreateRouteTableAction
// Information about the CreateRouteTable action in Amazon EC2.
type Ec2CreateRouteTableAction struct {
	Description *string      `json:"Description,omitempty"`
	VpcID       ActionTarget `json:"VpcId"`
}
