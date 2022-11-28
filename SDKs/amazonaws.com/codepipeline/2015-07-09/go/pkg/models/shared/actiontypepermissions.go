package shared

// ActionTypePermissions
// Details identifying the users with permissions to use the action type.
type ActionTypePermissions struct {
	AllowedAccounts []string `json:"allowedAccounts"`
}
