package shared

type CreateRegistryResponse struct {
	Description  *string           `json:"Description,omitempty"`
	RegistryArn  *string           `json:"RegistryArn,omitempty"`
	RegistryName *string           `json:"RegistryName,omitempty"`
	Tags         map[string]string `json:"Tags,omitempty"`
}
