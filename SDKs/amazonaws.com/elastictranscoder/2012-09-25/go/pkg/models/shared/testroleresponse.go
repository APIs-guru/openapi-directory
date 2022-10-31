package shared

type TestRoleResponse struct {
	Messages []string `json:"Messages,omitempty"`
	Success  *string  `json:"Success,omitempty"`
}
