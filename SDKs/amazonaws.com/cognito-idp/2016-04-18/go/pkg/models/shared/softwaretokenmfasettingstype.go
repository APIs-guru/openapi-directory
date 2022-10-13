package shared

type SoftwareTokenMfaSettingsType struct {
	Enabled      *bool `json:"Enabled"`
	PreferredMfa *bool `json:"PreferredMfa"`
}
