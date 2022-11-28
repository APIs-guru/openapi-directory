package shared

// UserProfileSummary
// Information about a user's profile in AWS CodeStar.
type UserProfileSummary struct {
	DisplayName  *string `json:"displayName,omitempty"`
	EmailAddress *string `json:"emailAddress,omitempty"`
	SSHPublicKey *string `json:"sshPublicKey,omitempty"`
	UserArn      *string `json:"userArn,omitempty"`
}
