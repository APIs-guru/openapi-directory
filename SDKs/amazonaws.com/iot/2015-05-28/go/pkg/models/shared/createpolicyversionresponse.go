package shared

type CreatePolicyVersionResponse struct {
	IsDefaultVersion *bool   `json:"isDefaultVersion"`
	PolicyArn        *string `json:"policyArn"`
	PolicyDocument   *string `json:"policyDocument"`
	PolicyVersionID  *string `json:"policyVersionId"`
}
