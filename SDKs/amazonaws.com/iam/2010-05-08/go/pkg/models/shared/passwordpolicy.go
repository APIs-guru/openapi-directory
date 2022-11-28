package shared

// PasswordPolicy
// <p>Contains information about the account password policy.</p> <p> This data type is used as a response element in the <a>GetAccountPasswordPolicy</a> operation. </p>
type PasswordPolicy struct {
	AllowUsersToChangePassword *bool
	ExpirePasswords            *bool
	HardExpiry                 *bool
	MaxPasswordAge             *int64
	MinimumPasswordLength      *int64
	PasswordReusePrevention    *int64
	RequireLowercaseCharacters *bool
	RequireNumbers             *bool
	RequireSymbols             *bool
	RequireUppercaseCharacters *bool
}
