package shared

// ResendConfirmationCodeResponse
// The response from the server when the Amazon Cognito Your User Pools service makes the request to resend a confirmation code.
type ResendConfirmationCodeResponse struct {
	CodeDeliveryDetails *CodeDeliveryDetailsType `json:"CodeDeliveryDetails,omitempty"`
}
