package shared

// SoftwareTokenMfaSettingsType
// The type used for enabling software token MFA at the user level. If an MFA type is enabled for a user, the user will be prompted for MFA during all sign in attempts, unless device tracking is turned on and the device has been trusted. If you would like MFA to be applied selectively based on the assessed risk level of sign in attempts, disable MFA for users and turn on Adaptive Authentication for the user pool.
type SoftwareTokenMfaSettingsType struct {
	Enabled      *bool `json:"Enabled,omitempty"`
	PreferredMfa *bool `json:"PreferredMfa,omitempty"`
}
