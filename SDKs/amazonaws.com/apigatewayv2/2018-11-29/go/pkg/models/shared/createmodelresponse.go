package shared

type CreateModelResponse struct {
	ContentType *string `json:"ContentType,omitempty"`
	Description *string `json:"Description,omitempty"`
	ModelID     *string `json:"ModelId,omitempty"`
	Name        *string `json:"Name,omitempty"`
	Schema      *string `json:"Schema,omitempty"`
}
