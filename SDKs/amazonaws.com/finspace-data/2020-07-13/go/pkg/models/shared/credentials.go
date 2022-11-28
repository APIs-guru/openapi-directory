package shared

// Credentials
// Set short term API credentials.
type Credentials struct {
	AccessKeyID     *string `json:"accessKeyId,omitempty"`
	SecretAccessKey *string `json:"secretAccessKey,omitempty"`
	SessionToken    *string `json:"sessionToken,omitempty"`
}
