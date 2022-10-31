package shared



type SubnetGroup struct {
    Description *string `json:"Description,omitempty"`
    SubnetGroupName *string `json:"SubnetGroupName,omitempty"`
    Subnets []Subnet `json:"Subnets,omitempty"`
    VpcID *string `json:"VpcId,omitempty"`
    
}

