package shared

// AdminCreateUserResponse
// Represents the response from the server to the request to create the user.
type AdminCreateUserResponse struct {
	User *UserType `json:"User,omitempty"`
}
