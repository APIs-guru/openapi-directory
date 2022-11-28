package shared

// GetRolePolicyResponse
// Contains the response to a successful <a>GetRolePolicy</a> request.
type GetRolePolicyResponse struct {
	PolicyDocument string
	PolicyName     string
	RoleName       string
}
