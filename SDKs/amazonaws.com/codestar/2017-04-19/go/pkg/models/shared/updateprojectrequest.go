package shared

type UpdateProjectRequest struct {
	Description *string `json:"description"`
	ID          string  `json:"id"`
	Name        *string `json:"name"`
}
