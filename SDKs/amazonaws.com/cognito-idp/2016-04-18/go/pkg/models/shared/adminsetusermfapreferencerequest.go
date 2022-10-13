package shared

type AdminSetUserMfaPreferenceRequest struct {
	SmsMfaSettings           *SmsMfaSettingsType           `json:"SMSMfaSettings"`
	SoftwareTokenMfaSettings *SoftwareTokenMfaSettingsType `json:"SoftwareTokenMfaSettings"`
	UserPoolID               string                        `json:"UserPoolId"`
	Username                 string                        `json:"Username"`
}
