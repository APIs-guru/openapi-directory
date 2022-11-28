package shared

// CreatePolicyResponse
// The output from the CreatePolicy operation.
type CreatePolicyResponse struct {
	PolicyArn       *string `json:"policyArn,omitempty"`
	PolicyDocument  *string `json:"policyDocument,omitempty"`
	PolicyName      *string `json:"policyName,omitempty"`
	PolicyVersionID *string `json:"policyVersionId,omitempty"`
}
