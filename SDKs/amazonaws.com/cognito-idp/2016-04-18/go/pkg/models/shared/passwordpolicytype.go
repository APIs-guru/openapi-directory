package shared

type PasswordPolicyType struct {
	MinimumLength                 *int64 `json:"MinimumLength"`
	RequireLowercase              *bool  `json:"RequireLowercase"`
	RequireNumbers                *bool  `json:"RequireNumbers"`
	RequireSymbols                *bool  `json:"RequireSymbols"`
	RequireUppercase              *bool  `json:"RequireUppercase"`
	TemporaryPasswordValidityDays *int64 `json:"TemporaryPasswordValidityDays"`
}
