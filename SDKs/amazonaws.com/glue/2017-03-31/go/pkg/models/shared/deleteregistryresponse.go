package shared

type DeleteRegistryResponse struct {
	RegistryArn  *string             `json:"RegistryArn"`
	RegistryName *string             `json:"RegistryName"`
	Status       *RegistryStatusEnum `json:"Status"`
}
