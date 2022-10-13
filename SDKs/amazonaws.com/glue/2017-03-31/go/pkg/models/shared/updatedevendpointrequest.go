package shared

type UpdateDevEndpointRequest struct {
	AddArguments       map[string]string           `json:"AddArguments"`
	AddPublicKeys      []string                    `json:"AddPublicKeys"`
	CustomLibraries    *DevEndpointCustomLibraries `json:"CustomLibraries"`
	DeleteArguments    []string                    `json:"DeleteArguments"`
	DeletePublicKeys   []string                    `json:"DeletePublicKeys"`
	EndpointName       string                      `json:"EndpointName"`
	PublicKey          *string                     `json:"PublicKey"`
	UpdateEtlLibraries *bool                       `json:"UpdateEtlLibraries"`
}
