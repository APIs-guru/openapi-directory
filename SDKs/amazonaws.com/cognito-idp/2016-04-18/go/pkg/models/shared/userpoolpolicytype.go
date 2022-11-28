package shared

// UserPoolPolicyType
// The policy associated with a user pool.
type UserPoolPolicyType struct {
	PasswordPolicy *PasswordPolicyType `json:"PasswordPolicy,omitempty"`
}
