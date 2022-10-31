package shared

type SetUserPoolMfaConfigRequest struct {
	MfaConfiguration              *UserPoolMfaTypeEnum        `json:"MfaConfiguration,omitempty"`
	SmsMfaConfiguration           *SmsMfaConfigType           `json:"SmsMfaConfiguration,omitempty"`
	SoftwareTokenMfaConfiguration *SoftwareTokenMfaConfigType `json:"SoftwareTokenMfaConfiguration,omitempty"`
	UserPoolID                    string                      `json:"UserPoolId"`
}
