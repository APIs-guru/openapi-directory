package shared

type Ec2CreateRouteTableAction struct {
	Description *string      `json:"Description"`
	VpcID       ActionTarget `json:"VpcId"`
}
