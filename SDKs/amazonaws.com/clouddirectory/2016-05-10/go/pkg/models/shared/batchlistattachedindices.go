package shared

type BatchListAttachedIndices struct {
	MaxResults      *int64          `json:"MaxResults"`
	NextToken       *string         `json:"NextToken"`
	TargetReference ObjectReference `json:"TargetReference"`
}
