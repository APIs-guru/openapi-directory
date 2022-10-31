package shared

type GetRegistryResponse struct {
	CreatedTime  *string             `json:"CreatedTime,omitempty"`
	Description  *string             `json:"Description,omitempty"`
	RegistryArn  *string             `json:"RegistryArn,omitempty"`
	RegistryName *string             `json:"RegistryName,omitempty"`
	Status       *RegistryStatusEnum `json:"Status,omitempty"`
	UpdatedTime  *string             `json:"UpdatedTime,omitempty"`
}
