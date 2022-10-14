package shared

type PolicyVersionIdentifier struct {
	PolicyName      *string `json:"policyName,omitempty"`
	PolicyVersionID *string `json:"policyVersionId,omitempty"`
}
