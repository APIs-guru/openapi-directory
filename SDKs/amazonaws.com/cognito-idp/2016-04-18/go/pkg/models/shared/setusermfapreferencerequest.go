package shared

type SetUserMfaPreferenceRequest struct {
	AccessToken              string                        `json:"AccessToken"`
	SmsMfaSettings           *SmsMfaSettingsType           `json:"SMSMfaSettings"`
	SoftwareTokenMfaSettings *SoftwareTokenMfaSettingsType `json:"SoftwareTokenMfaSettings"`
}
