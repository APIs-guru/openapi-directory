package shared

type VpcConfiguration struct {
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	SubnetIds        []string `json:"SubnetIds"`
	TLSCertificate   *string  `json:"TlsCertificate"`
	VpcID            string   `json:"VpcId"`
}
