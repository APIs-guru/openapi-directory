package shared

// SetUserSettingsRequest
// Represents the request to set user settings.
type SetUserSettingsRequest struct {
	AccessToken string          `json:"AccessToken"`
	MfaOptions  []MfaOptionType `json:"MFAOptions"`
}
