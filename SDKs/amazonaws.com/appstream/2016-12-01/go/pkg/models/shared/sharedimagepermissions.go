package shared

// SharedImagePermissions
// Describes the permissions that are available to the specified AWS account for a shared image.
type SharedImagePermissions struct {
	ImagePermissions ImagePermissions `json:"imagePermissions"`
	SharedAccountID  string           `json:"sharedAccountId"`
}
