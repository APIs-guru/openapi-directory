package shared

type Model struct {
	ContentType *string `json:"contentType"`
	Description *string `json:"description"`
	ID          *string `json:"id"`
	Name        *string `json:"name"`
	Schema      *string `json:"schema"`
}
