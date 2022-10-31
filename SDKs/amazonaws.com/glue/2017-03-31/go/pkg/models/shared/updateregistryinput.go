package shared

type UpdateRegistryInput struct {
	Description string     `json:"Description"`
	RegistryID  RegistryID `json:"RegistryId"`
}
