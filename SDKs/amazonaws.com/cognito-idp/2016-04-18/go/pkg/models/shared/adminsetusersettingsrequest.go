package shared



type AdminSetUserSettingsRequest struct {
    MfaOptions []MfaOptionType `json:"MFAOptions"`
    UserPoolID string `json:"UserPoolId"`
    Username string `json:"Username"`
    
}

