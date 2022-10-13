package shared

type PutRegistryPolicyResponse struct {
	PolicyText *string `json:"policyText"`
	RegistryID *string `json:"registryId"`
}
