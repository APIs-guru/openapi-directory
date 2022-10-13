package shared

type CreateApplicationRequest struct {
	Description *string `json:"description"`
	Name        string  `json:"name"`
}
