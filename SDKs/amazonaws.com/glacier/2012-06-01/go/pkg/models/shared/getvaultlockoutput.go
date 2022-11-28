package shared

// GetVaultLockOutput
// Contains the Amazon S3 Glacier response to your request.
type GetVaultLockOutput struct {
	CreationDate   *string `json:"CreationDate,omitempty"`
	ExpirationDate *string `json:"ExpirationDate,omitempty"`
	Policy         *string `json:"Policy,omitempty"`
	State          *string `json:"State,omitempty"`
}
