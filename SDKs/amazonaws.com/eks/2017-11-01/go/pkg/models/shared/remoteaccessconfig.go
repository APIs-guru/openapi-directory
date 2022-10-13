package shared

type RemoteAccessConfig struct {
	Ec2SSHKey            *string  `json:"ec2SshKey"`
	SourceSecurityGroups []string `json:"sourceSecurityGroups"`
}
