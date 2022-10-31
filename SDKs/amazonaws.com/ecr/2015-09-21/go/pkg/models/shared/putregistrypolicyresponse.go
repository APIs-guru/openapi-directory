package shared

type PutRegistryPolicyResponse struct {
	PolicyText *string `json:"policyText,omitempty"`
	RegistryID *string `json:"registryId,omitempty"`
}
