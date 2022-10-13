package shared

type VpcConfigResponse struct {
	ClusterSecurityGroupID *string  `json:"clusterSecurityGroupId"`
	EndpointPrivateAccess  *bool    `json:"endpointPrivateAccess"`
	EndpointPublicAccess   *bool    `json:"endpointPublicAccess"`
	PublicAccessCidrs      []string `json:"publicAccessCidrs"`
	SecurityGroupIds       []string `json:"securityGroupIds"`
	SubnetIds              []string `json:"subnetIds"`
	VpcID                  *string  `json:"vpcId"`
}
