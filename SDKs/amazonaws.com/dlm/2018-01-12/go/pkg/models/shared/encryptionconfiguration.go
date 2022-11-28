package shared

// EncryptionConfiguration
// Specifies the encryption settings for shared snapshots that are copied across Regions.
type EncryptionConfiguration struct {
	CmkArn    *string `json:"CmkArn,omitempty"`
	Encrypted bool    `json:"Encrypted"`
}
