package shared

// BatchListAttachedIndices
// Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>.
type BatchListAttachedIndices struct {
	MaxResults      *int64          `json:"MaxResults,omitempty"`
	NextToken       *string         `json:"NextToken,omitempty"`
	TargetReference ObjectReference `json:"TargetReference"`
}
