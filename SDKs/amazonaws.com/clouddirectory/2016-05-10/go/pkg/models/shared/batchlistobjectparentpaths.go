package shared

type BatchListObjectParentPaths struct {
	MaxResults      *int64          `json:"MaxResults"`
	NextToken       *string         `json:"NextToken"`
	ObjectReference ObjectReference `json:"ObjectReference"`
}
