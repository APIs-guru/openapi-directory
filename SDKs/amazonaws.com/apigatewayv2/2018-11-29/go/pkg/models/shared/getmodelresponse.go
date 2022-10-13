package shared

type GetModelResponse struct {
	ContentType *string `json:"ContentType"`
	Description *string `json:"Description"`
	ModelID     *string `json:"ModelId"`
	Name        *string `json:"Name"`
	Schema      *string `json:"Schema"`
}
