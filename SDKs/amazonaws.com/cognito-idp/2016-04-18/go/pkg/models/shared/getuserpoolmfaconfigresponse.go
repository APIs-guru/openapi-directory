package shared

type GetUserPoolMfaConfigResponse struct {
	MfaConfiguration              *UserPoolMfaTypeEnum        `json:"MfaConfiguration"`
	SmsMfaConfiguration           *SmsMfaConfigType           `json:"SmsMfaConfiguration"`
	SoftwareTokenMfaConfiguration *SoftwareTokenMfaConfigType `json:"SoftwareTokenMfaConfiguration"`
}
