package shared

type Ec2Config struct {
	SecurityGroupArns []string `json:"SecurityGroupArns"`
	SubnetArn         string   `json:"SubnetArn"`
}
