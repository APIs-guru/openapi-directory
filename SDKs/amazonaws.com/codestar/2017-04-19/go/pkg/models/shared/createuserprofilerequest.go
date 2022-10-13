package shared

type CreateUserProfileRequest struct {
	DisplayName  string  `json:"displayName"`
	EmailAddress string  `json:"emailAddress"`
	SSHPublicKey *string `json:"sshPublicKey"`
	UserArn      string  `json:"userArn"`
}
