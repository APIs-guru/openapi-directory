package shared

type GetUICustomizationRequest struct {
	ClientID   *string `json:"ClientId"`
	UserPoolID string  `json:"UserPoolId"`
}
