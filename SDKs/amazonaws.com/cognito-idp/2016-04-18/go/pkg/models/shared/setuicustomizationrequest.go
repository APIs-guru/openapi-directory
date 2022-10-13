package shared

type SetUICustomizationRequest struct {
	CSS        *string `json:"CSS"`
	ClientID   *string `json:"ClientId"`
	ImageFile  *string `json:"ImageFile"`
	UserPoolID string  `json:"UserPoolId"`
}
