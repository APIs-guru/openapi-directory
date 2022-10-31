package shared

type GetRegistryPolicyResponse struct {
	PolicyText *string `json:"policyText,omitempty"`
	RegistryID *string `json:"registryId,omitempty"`
}
