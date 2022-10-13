package shared

type SmsMfaSettingsType struct {
	Enabled      *bool `json:"Enabled"`
	PreferredMfa *bool `json:"PreferredMfa"`
}
