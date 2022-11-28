package shared

// RemoteAccessConfig
// An object representing the remote access configuration for the managed node group.
type RemoteAccessConfig struct {
	Ec2SSHKey            *string  `json:"ec2SshKey,omitempty"`
	SourceSecurityGroups []string `json:"sourceSecurityGroups,omitempty"`
}
