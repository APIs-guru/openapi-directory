package shared

// DeleteUserPoolClientRequest
// Represents the request to delete a user pool client.
type DeleteUserPoolClientRequest struct {
	ClientID   string `json:"ClientId"`
	UserPoolID string `json:"UserPoolId"`
}
