package shared

// ListJobsByStatusResponse
//
//	The <code>ListJobsByStatusResponse</code> structure.
type ListJobsByStatusResponse struct {
	Jobs          []Job   `json:"Jobs,omitempty"`
	NextPageToken *string `json:"NextPageToken,omitempty"`
}
