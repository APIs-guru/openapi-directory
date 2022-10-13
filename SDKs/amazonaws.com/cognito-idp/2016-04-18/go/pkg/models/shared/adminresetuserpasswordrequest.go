package shared

type AdminResetUserPasswordRequest struct {
	ClientMetadata map[string]string `json:"ClientMetadata"`
	UserPoolID     string            `json:"UserPoolId"`
	Username       string            `json:"Username"`
}
