package shared

type SubnetGroup struct {
	Description     *string  `json:"Description"`
	SubnetGroupName *string  `json:"SubnetGroupName"`
	Subnets         []Subnet `json:"Subnets"`
	VpcID           *string  `json:"VpcId"`
}
