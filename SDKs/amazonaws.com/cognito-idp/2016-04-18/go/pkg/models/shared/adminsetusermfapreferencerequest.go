package shared

type AdminSetUserMfaPreferenceRequest struct {
	SmsMfaSettings           *SmsMfaSettingsType           `json:"SMSMfaSettings,omitempty"`
	SoftwareTokenMfaSettings *SoftwareTokenMfaSettingsType `json:"SoftwareTokenMfaSettings,omitempty"`
	UserPoolID               string                        `json:"UserPoolId"`
	Username                 string                        `json:"Username"`
}
