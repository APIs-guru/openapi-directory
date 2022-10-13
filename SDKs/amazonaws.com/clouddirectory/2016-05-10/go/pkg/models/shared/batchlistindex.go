package shared

type BatchListIndex struct {
	IndexReference        ObjectReference        `json:"IndexReference"`
	MaxResults            *int64                 `json:"MaxResults"`
	NextToken             *string                `json:"NextToken"`
	RangesOnIndexedValues []ObjectAttributeRange `json:"RangesOnIndexedValues"`
}
