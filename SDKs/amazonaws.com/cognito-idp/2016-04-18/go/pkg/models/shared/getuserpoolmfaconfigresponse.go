package shared

type GetUserPoolMfaConfigResponse struct {
	MfaConfiguration              *UserPoolMfaTypeEnum        `json:"MfaConfiguration,omitempty"`
	SmsMfaConfiguration           *SmsMfaConfigType           `json:"SmsMfaConfiguration,omitempty"`
	SoftwareTokenMfaConfiguration *SoftwareTokenMfaConfigType `json:"SoftwareTokenMfaConfiguration,omitempty"`
}
