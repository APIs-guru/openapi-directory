package shared

// GetUserPolicyResponse
// Contains the response to a successful <a>GetUserPolicy</a> request.
type GetUserPolicyResponse struct {
	PolicyDocument string
	PolicyName     string
	UserName       string
}
