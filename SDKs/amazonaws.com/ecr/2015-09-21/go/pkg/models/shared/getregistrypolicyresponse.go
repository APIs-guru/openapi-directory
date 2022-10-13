package shared

type GetRegistryPolicyResponse struct {
	PolicyText *string `json:"policyText"`
	RegistryID *string `json:"registryId"`
}
