package shared

type ListJobsByStatusResponse struct {
	Jobs          []Job   `json:"Jobs"`
	NextPageToken *string `json:"NextPageToken"`
}
