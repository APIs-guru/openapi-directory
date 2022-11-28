package shared

// GetGroupPolicyResponse
// Contains the response to a successful <a>GetGroupPolicy</a> request.
type GetGroupPolicyResponse struct {
	GroupName      string
	PolicyDocument string
	PolicyName     string
}
