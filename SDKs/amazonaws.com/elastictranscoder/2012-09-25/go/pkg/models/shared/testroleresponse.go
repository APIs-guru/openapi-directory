package shared

// TestRoleResponse
// The <code>TestRoleResponse</code> structure.
type TestRoleResponse struct {
	Messages []string `json:"Messages,omitempty"`
	Success  *string  `json:"Success,omitempty"`
}
