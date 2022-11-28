package shared

// Authentication
// Indicates whether the user requires a password to authenticate.
type Authentication struct {
	PasswordCount *int64
	Type          *AuthenticationTypeEnum
}
