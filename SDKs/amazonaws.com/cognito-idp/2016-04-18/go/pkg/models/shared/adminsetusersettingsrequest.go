package shared

// AdminSetUserSettingsRequest
// You can use this parameter to set an MFA configuration that uses the SMS delivery medium.
type AdminSetUserSettingsRequest struct {
	MfaOptions []MfaOptionType `json:"MFAOptions"`
	UserPoolID string          `json:"UserPoolId"`
	Username   string          `json:"Username"`
}
