package shared

type CreatePolicyResponse struct {
	PolicyArn       *string `json:"policyArn"`
	PolicyDocument  *string `json:"policyDocument"`
	PolicyName      *string `json:"policyName"`
	PolicyVersionID *string `json:"policyVersionId"`
}
