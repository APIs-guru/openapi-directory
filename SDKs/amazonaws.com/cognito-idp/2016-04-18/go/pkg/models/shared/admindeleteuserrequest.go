package shared

// AdminDeleteUserRequest
// Represents the request to delete a user as an administrator.
type AdminDeleteUserRequest struct {
	UserPoolID string `json:"UserPoolId"`
	Username   string `json:"Username"`
}
