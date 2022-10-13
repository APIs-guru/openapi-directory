package shared

type GetBackendAPIModelsResponse struct {
	Models *string     `json:"Models"`
	Status *StatusEnum `json:"Status"`
}
