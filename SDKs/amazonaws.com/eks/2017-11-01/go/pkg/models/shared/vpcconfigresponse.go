package shared

type VpcConfigResponse struct {
	ClusterSecurityGroupID *string  `json:"clusterSecurityGroupId,omitempty"`
	EndpointPrivateAccess  *bool    `json:"endpointPrivateAccess,omitempty"`
	EndpointPublicAccess   *bool    `json:"endpointPublicAccess,omitempty"`
	PublicAccessCidrs      []string `json:"publicAccessCidrs,omitempty"`
	SecurityGroupIds       []string `json:"securityGroupIds,omitempty"`
	SubnetIds              []string `json:"subnetIds,omitempty"`
	VpcID                  *string  `json:"vpcId,omitempty"`
}
