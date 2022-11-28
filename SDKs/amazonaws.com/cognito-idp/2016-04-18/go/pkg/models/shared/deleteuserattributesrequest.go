package shared

// DeleteUserAttributesRequest
// Represents the request to delete user attributes.
type DeleteUserAttributesRequest struct {
	AccessToken        string   `json:"AccessToken"`
	UserAttributeNames []string `json:"UserAttributeNames"`
}
