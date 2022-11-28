package shared

// CreateUserPoolClientResponse
// Represents the response from the server to create a user pool client.
type CreateUserPoolClientResponse struct {
	UserPoolClient *UserPoolClientType `json:"UserPoolClient,omitempty"`
}
