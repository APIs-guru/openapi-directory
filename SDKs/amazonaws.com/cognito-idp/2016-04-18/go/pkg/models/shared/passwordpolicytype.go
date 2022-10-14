package shared

type PasswordPolicyType struct {
	MinimumLength                 *int64 `json:"MinimumLength,omitempty"`
	RequireLowercase              *bool  `json:"RequireLowercase,omitempty"`
	RequireNumbers                *bool  `json:"RequireNumbers,omitempty"`
	RequireSymbols                *bool  `json:"RequireSymbols,omitempty"`
	RequireUppercase              *bool  `json:"RequireUppercase,omitempty"`
	TemporaryPasswordValidityDays *int64 `json:"TemporaryPasswordValidityDays,omitempty"`
}
