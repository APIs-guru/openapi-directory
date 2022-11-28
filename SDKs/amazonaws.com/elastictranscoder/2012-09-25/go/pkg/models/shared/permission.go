package shared

// Permission
// The <code>Permission</code> structure.
type Permission struct {
	Access      []string `json:"Access,omitempty"`
	Grantee     *string  `json:"Grantee,omitempty"`
	GranteeType *string  `json:"GranteeType,omitempty"`
}
