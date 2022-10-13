package shared

type RegistryListItem struct {
	CreatedTime  *string             `json:"CreatedTime"`
	Description  *string             `json:"Description"`
	RegistryArn  *string             `json:"RegistryArn"`
	RegistryName *string             `json:"RegistryName"`
	Status       *RegistryStatusEnum `json:"Status"`
	UpdatedTime  *string             `json:"UpdatedTime"`
}
