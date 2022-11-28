package shared

// ListTagsForResourceResponse
//
//	The response for the list tags for resource request.
type ListTagsForResourceResponse struct {
	Tags map[string]string `json:"tags,omitempty"`
}
