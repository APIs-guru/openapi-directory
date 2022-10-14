package shared

type Ec2CreateRouteTableAction struct {
	Description *string      `json:"Description,omitempty"`
	VpcID       ActionTarget `json:"VpcId"`
}
