package shared

// PushSync
// Configuration options to be applied to the identity pool.
type PushSync struct {
	ApplicationArns []string `json:"ApplicationArns,omitempty"`
	RoleArn         *string  `json:"RoleArn,omitempty"`
}
