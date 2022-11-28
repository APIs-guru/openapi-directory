package shared

// ListTagsForResourceOutput
// <zonbook></zonbook><xhtml></xhtml>
type ListTagsForResourceOutput struct {
	NextToken *string  `json:"nextToken,omitempty"`
	Tags      []TagRef `json:"tags"`
}
