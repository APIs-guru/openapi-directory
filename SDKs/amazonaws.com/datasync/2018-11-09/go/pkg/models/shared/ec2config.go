package shared

// Ec2Config
// The subnet and the security group that DataSync uses to access target EFS file system. The subnet must have at least one mount target for that file system. The security group that you provide needs to be able to communicate with the security group on the mount target in the subnet specified.
type Ec2Config struct {
	SecurityGroupArns []string `json:"SecurityGroupArns"`
	SubnetArn         string   `json:"SubnetArn"`
}
