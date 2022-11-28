package shared

// CreateUserPoolResponse
// Represents the response from the server for the request to create a user pool.
type CreateUserPoolResponse struct {
	UserPool *UserPoolType `json:"UserPool,omitempty"`
}
