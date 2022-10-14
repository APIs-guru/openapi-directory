package shared

type UpdateDevEndpointRequest struct {
	AddArguments       map[string]string           `json:"AddArguments,omitempty"`
	AddPublicKeys      []string                    `json:"AddPublicKeys,omitempty"`
	CustomLibraries    *DevEndpointCustomLibraries `json:"CustomLibraries,omitempty"`
	DeleteArguments    []string                    `json:"DeleteArguments,omitempty"`
	DeletePublicKeys   []string                    `json:"DeletePublicKeys,omitempty"`
	EndpointName       string                      `json:"EndpointName"`
	PublicKey          *string                     `json:"PublicKey,omitempty"`
	UpdateEtlLibraries *bool                       `json:"UpdateEtlLibraries,omitempty"`
}
