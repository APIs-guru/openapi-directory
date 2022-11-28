package shared

// SignUpResponse
// The response from the server for a registration request.
type SignUpResponse struct {
	CodeDeliveryDetails *CodeDeliveryDetailsType `json:"CodeDeliveryDetails,omitempty"`
	UserConfirmed       bool                     `json:"UserConfirmed"`
	UserSub             string                   `json:"UserSub"`
}
