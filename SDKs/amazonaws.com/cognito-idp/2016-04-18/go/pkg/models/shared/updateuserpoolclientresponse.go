package shared

// UpdateUserPoolClientResponse
// Represents the response from the server to the request to update the user pool client.
type UpdateUserPoolClientResponse struct {
	UserPoolClient *UserPoolClientType `json:"UserPoolClient,omitempty"`
}
