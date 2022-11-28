package shared

// AdminGetUserRequest
// Represents the request to get the specified user as an administrator.
type AdminGetUserRequest struct {
	UserPoolID string `json:"UserPoolId"`
	Username   string `json:"Username"`
}
