package shared

type DeleteProjectRequest struct {
	ClientRequestToken *string `json:"clientRequestToken"`
	DeleteStack        *bool   `json:"deleteStack"`
	ID                 string  `json:"id"`
}
