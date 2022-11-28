package shared

// CreatePolicyVersionResponse
// The output of the CreatePolicyVersion operation.
type CreatePolicyVersionResponse struct {
	IsDefaultVersion *bool   `json:"isDefaultVersion,omitempty"`
	PolicyArn        *string `json:"policyArn,omitempty"`
	PolicyDocument   *string `json:"policyDocument,omitempty"`
	PolicyVersionID  *string `json:"policyVersionId,omitempty"`
}
