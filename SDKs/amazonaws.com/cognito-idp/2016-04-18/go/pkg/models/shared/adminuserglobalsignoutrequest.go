package shared

// AdminUserGlobalSignOutRequest
// The request to sign out of all devices, as an administrator.
type AdminUserGlobalSignOutRequest struct {
	UserPoolID string `json:"UserPoolId"`
	Username   string `json:"Username"`
}
