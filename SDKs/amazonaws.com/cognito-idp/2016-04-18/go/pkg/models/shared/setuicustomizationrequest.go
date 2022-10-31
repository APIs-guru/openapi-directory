package shared

type SetUICustomizationRequest struct {
	CSS        *string `json:"CSS,omitempty"`
	ClientID   *string `json:"ClientId,omitempty"`
	ImageFile  *string `json:"ImageFile,omitempty"`
	UserPoolID string  `json:"UserPoolId"`
}
