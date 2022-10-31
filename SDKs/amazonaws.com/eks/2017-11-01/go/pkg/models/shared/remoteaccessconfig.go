package shared



type RemoteAccessConfig struct {
    Ec2SSHKey *string `json:"ec2SshKey,omitempty"`
    SourceSecurityGroups []string `json:"sourceSecurityGroups,omitempty"`
    
}

