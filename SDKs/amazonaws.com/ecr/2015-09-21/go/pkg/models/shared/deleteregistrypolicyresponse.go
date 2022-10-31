package shared

type DeleteRegistryPolicyResponse struct {
	PolicyText *string `json:"policyText,omitempty"`
	RegistryID *string `json:"registryId,omitempty"`
}
