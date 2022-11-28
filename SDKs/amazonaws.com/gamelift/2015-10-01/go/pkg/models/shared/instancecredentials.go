package shared

// InstanceCredentials
// Set of credentials required to remotely access a fleet instance. Access credentials are requested by calling <a>GetInstanceAccess</a> and returned in an <a>InstanceAccess</a> object.
type InstanceCredentials struct {
	Secret   *string `json:"Secret,omitempty"`
	UserName *string `json:"UserName,omitempty"`
}
