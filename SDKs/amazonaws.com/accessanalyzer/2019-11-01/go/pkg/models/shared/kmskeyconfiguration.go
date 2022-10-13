package shared

type KmsKeyConfiguration struct {
	Grants      []KmsGrantConfiguration `json:"grants"`
	KeyPolicies map[string]string       `json:"keyPolicies"`
}
