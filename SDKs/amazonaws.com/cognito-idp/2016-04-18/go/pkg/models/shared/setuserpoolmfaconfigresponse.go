package shared

type SetUserPoolMfaConfigResponse struct {
	MfaConfiguration              *UserPoolMfaTypeEnum        `json:"MfaConfiguration"`
	SmsMfaConfiguration           *SmsMfaConfigType           `json:"SmsMfaConfiguration"`
	SoftwareTokenMfaConfiguration *SoftwareTokenMfaConfigType `json:"SoftwareTokenMfaConfiguration"`
}
