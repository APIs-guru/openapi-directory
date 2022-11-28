package shared

// BatchListIndex
// Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.
type BatchListIndex struct {
	IndexReference        ObjectReference        `json:"IndexReference"`
	MaxResults            *int64                 `json:"MaxResults,omitempty"`
	NextToken             *string                `json:"NextToken,omitempty"`
	RangesOnIndexedValues []ObjectAttributeRange `json:"RangesOnIndexedValues,omitempty"`
}
