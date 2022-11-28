package shared

// RemediationAction
// Information about an individual action you can take to remediate a violation.
type RemediationAction struct {
	Description                           *string                                `json:"Description,omitempty"`
	Ec2AssociateRouteTableAction          *Ec2AssociateRouteTableAction          `json:"EC2AssociateRouteTableAction,omitempty"`
	Ec2CopyRouteTableAction               *Ec2CopyRouteTableAction               `json:"EC2CopyRouteTableAction,omitempty"`
	Ec2CreateRouteAction                  *Ec2CreateRouteAction                  `json:"EC2CreateRouteAction,omitempty"`
	Ec2CreateRouteTableAction             *Ec2CreateRouteTableAction             `json:"EC2CreateRouteTableAction,omitempty"`
	Ec2DeleteRouteAction                  *Ec2DeleteRouteAction                  `json:"EC2DeleteRouteAction,omitempty"`
	Ec2ReplaceRouteAction                 *Ec2ReplaceRouteAction                 `json:"EC2ReplaceRouteAction,omitempty"`
	Ec2ReplaceRouteTableAssociationAction *Ec2ReplaceRouteTableAssociationAction `json:"EC2ReplaceRouteTableAssociationAction,omitempty"`
}
