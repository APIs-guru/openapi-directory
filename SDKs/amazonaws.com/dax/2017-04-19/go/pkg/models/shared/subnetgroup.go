package shared

// SubnetGroup
// <p>Represents the output of one of the following actions:</p> <ul> <li> <p> <i>CreateSubnetGroup</i> </p> </li> <li> <p> <i>ModifySubnetGroup</i> </p> </li> </ul>
type SubnetGroup struct {
	Description     *string  `json:"Description,omitempty"`
	SubnetGroupName *string  `json:"SubnetGroupName,omitempty"`
	Subnets         []Subnet `json:"Subnets,omitempty"`
	VpcID           *string  `json:"VpcId,omitempty"`
}
