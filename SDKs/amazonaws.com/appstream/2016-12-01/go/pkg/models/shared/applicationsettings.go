package shared

// ApplicationSettings
// The persistent application settings for users of a stack.
type ApplicationSettings struct {
	Enabled       bool    `json:"Enabled"`
	SettingsGroup *string `json:"SettingsGroup,omitempty"`
}
