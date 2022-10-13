package shared

type AdminConfirmSignUpRequest struct {
	ClientMetadata map[string]string `json:"ClientMetadata"`
	UserPoolID     string            `json:"UserPoolId"`
	Username       string            `json:"Username"`
}
