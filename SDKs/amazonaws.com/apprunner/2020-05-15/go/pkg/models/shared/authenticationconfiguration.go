package shared

// AuthenticationConfiguration
// Describes resources needed to authenticate access to some source repositories. The specific resource depends on the repository provider.
type AuthenticationConfiguration struct {
	AccessRoleArn *string `json:"AccessRoleArn,omitempty"`
	ConnectionArn *string `json:"ConnectionArn,omitempty"`
}
