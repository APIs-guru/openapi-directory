package shared

// BatchListObjectChildren
// Represents the output of a <a>ListObjectChildren</a> operation.
type BatchListObjectChildren struct {
	MaxResults      *int64          `json:"MaxResults,omitempty"`
	NextToken       *string         `json:"NextToken,omitempty"`
	ObjectReference ObjectReference `json:"ObjectReference"`
}
