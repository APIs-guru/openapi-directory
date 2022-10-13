package shared

type CreateRegistryResponse struct {
	Description  *string           `json:"Description"`
	RegistryArn  *string           `json:"RegistryArn"`
	RegistryName *string           `json:"RegistryName"`
	Tags         map[string]string `json:"Tags"`
}
