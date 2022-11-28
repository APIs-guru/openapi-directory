package shared

// BatchListObjectChildrenResponse
// Represents the output of a <a>ListObjectChildren</a> response operation.
type BatchListObjectChildrenResponse struct {
	Children  map[string]string `json:"Children,omitempty"`
	NextToken *string           `json:"NextToken,omitempty"`
}
