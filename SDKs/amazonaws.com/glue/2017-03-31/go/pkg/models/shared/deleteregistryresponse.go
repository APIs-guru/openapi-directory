package shared

type DeleteRegistryResponse struct {
	RegistryArn  *string             `json:"RegistryArn,omitempty"`
	RegistryName *string             `json:"RegistryName,omitempty"`
	Status       *RegistryStatusEnum `json:"Status,omitempty"`
}
