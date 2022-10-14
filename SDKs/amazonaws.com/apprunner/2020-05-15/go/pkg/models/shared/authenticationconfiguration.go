package shared

type AuthenticationConfiguration struct {
	AccessRoleArn *string `json:"AccessRoleArn,omitempty"`
	ConnectionArn *string `json:"ConnectionArn,omitempty"`
}
