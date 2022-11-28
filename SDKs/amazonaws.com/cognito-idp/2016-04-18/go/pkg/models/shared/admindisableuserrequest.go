package shared

// AdminDisableUserRequest
// Represents the request to disable the user as an administrator.
type AdminDisableUserRequest struct {
	UserPoolID string `json:"UserPoolId"`
	Username   string `json:"Username"`
}
