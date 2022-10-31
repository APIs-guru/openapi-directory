package shared



type SetUserSettingsRequest struct {
    AccessToken string `json:"AccessToken"`
    MfaOptions []MfaOptionType `json:"MFAOptions"`
    
}

