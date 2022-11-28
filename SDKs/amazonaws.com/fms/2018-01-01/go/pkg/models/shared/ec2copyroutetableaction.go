package shared

// Ec2CopyRouteTableAction
// An action that copies the EC2 route table for use in remediation.
type Ec2CopyRouteTableAction struct {
	Description  *string      `json:"Description,omitempty"`
	RouteTableID ActionTarget `json:"RouteTableId"`
	VpcID        ActionTarget `json:"VpcId"`
}
