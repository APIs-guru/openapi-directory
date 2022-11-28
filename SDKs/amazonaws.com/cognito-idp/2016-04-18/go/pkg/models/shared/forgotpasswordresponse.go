package shared

// ForgotPasswordResponse
// Respresents the response from the server regarding the request to reset a password.
type ForgotPasswordResponse struct {
	CodeDeliveryDetails *CodeDeliveryDetailsType `json:"CodeDeliveryDetails,omitempty"`
}
