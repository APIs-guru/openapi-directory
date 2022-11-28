package shared

// PolicyVersionIdentifier
// Information about the version of the policy associated with the resource.
type PolicyVersionIdentifier struct {
	PolicyName      *string `json:"policyName,omitempty"`
	PolicyVersionID *string `json:"policyVersionId,omitempty"`
}
