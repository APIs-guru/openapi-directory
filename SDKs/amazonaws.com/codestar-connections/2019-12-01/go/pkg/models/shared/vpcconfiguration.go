package shared

// VpcConfiguration
// The VPC configuration provisioned for the host.
type VpcConfiguration struct {
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	SubnetIds        []string `json:"SubnetIds"`
	TLSCertificate   *string  `json:"TlsCertificate,omitempty"`
	VpcID            string   `json:"VpcId"`
}
