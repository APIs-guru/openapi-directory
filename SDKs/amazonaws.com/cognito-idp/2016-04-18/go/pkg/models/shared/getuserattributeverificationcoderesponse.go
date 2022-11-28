package shared

// GetUserAttributeVerificationCodeResponse
// The verification code response returned by the server response to get the user attribute verification code.
type GetUserAttributeVerificationCodeResponse struct {
	CodeDeliveryDetails *CodeDeliveryDetailsType `json:"CodeDeliveryDetails,omitempty"`
}
