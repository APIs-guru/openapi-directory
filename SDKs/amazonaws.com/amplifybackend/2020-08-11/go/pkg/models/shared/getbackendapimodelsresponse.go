package shared

type GetBackendAPIModelsResponse struct {
	Models *string     `json:"Models,omitempty"`
	Status *StatusEnum `json:"Status,omitempty"`
}
