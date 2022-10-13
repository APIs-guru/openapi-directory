package shared

type RemediationAction struct {
	Description                           *string                                `json:"Description"`
	Ec2AssociateRouteTableAction          *Ec2AssociateRouteTableAction          `json:"EC2AssociateRouteTableAction"`
	Ec2CopyRouteTableAction               *Ec2CopyRouteTableAction               `json:"EC2CopyRouteTableAction"`
	Ec2CreateRouteAction                  *Ec2CreateRouteAction                  `json:"EC2CreateRouteAction"`
	Ec2CreateRouteTableAction             *Ec2CreateRouteTableAction             `json:"EC2CreateRouteTableAction"`
	Ec2DeleteRouteAction                  *Ec2DeleteRouteAction                  `json:"EC2DeleteRouteAction"`
	Ec2ReplaceRouteAction                 *Ec2ReplaceRouteAction                 `json:"EC2ReplaceRouteAction"`
	Ec2ReplaceRouteTableAssociationAction *Ec2ReplaceRouteTableAssociationAction `json:"EC2ReplaceRouteTableAssociationAction"`
}
