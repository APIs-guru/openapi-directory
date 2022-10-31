package shared



type UserProfileSummary struct {
    DisplayName *string `json:"displayName,omitempty"`
    EmailAddress *string `json:"emailAddress,omitempty"`
    SSHPublicKey *string `json:"sshPublicKey,omitempty"`
    UserArn *string `json:"userArn,omitempty"`
    
}

