package shared

type ListJobsByStatusResponse struct {
	Jobs          []Job   `json:"Jobs,omitempty"`
	NextPageToken *string `json:"NextPageToken,omitempty"`
}
