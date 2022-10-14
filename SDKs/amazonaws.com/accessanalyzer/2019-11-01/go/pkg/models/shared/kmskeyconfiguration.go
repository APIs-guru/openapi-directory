package shared

type KmsKeyConfiguration struct {
	Grants      []KmsGrantConfiguration `json:"grants,omitempty"`
	KeyPolicies map[string]string       `json:"keyPolicies,omitempty"`
}
