package shared

type SmsMfaSettingsType struct {
	Enabled      *bool `json:"Enabled,omitempty"`
	PreferredMfa *bool `json:"PreferredMfa,omitempty"`
}
