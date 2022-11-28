package shared

// SoftwareTokenMfaConfigType
// The type used for enabling software token MFA at the user pool level.
type SoftwareTokenMfaConfigType struct {
	Enabled *bool `json:"Enabled,omitempty"`
}
