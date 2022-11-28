package shared

// AdminEnableUserRequest
// Represents the request that enables the user as an administrator.
type AdminEnableUserRequest struct {
	UserPoolID string `json:"UserPoolId"`
	Username   string `json:"Username"`
}
