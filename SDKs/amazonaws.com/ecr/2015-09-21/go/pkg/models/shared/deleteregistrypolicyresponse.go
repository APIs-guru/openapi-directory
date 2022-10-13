package shared

type DeleteRegistryPolicyResponse struct {
	PolicyText *string `json:"policyText"`
	RegistryID *string `json:"registryId"`
}
