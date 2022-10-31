package shared



type SetUserMfaPreferenceRequest struct {
    AccessToken string `json:"AccessToken"`
    SmsMfaSettings *SmsMfaSettingsType `json:"SMSMfaSettings,omitempty"`
    SoftwareTokenMfaSettings *SoftwareTokenMfaSettingsType `json:"SoftwareTokenMfaSettings,omitempty"`
    
}

