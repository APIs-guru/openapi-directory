package shared

type SetUserPoolMfaConfigRequest struct {
	MfaConfiguration              *UserPoolMfaTypeEnum        `json:"MfaConfiguration"`
	SmsMfaConfiguration           *SmsMfaConfigType           `json:"SmsMfaConfiguration"`
	SoftwareTokenMfaConfiguration *SoftwareTokenMfaConfigType `json:"SoftwareTokenMfaConfiguration"`
	UserPoolID                    string                      `json:"UserPoolId"`
}
