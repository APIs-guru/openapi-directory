package shared

// AdminDeleteUserAttributesRequest
// Represents the request to delete user attributes as an administrator.
type AdminDeleteUserAttributesRequest struct {
	UserAttributeNames []string `json:"UserAttributeNames"`
	UserPoolID         string   `json:"UserPoolId"`
	Username           string   `json:"Username"`
}
