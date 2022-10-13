package shared

type BatchLookupPolicy struct {
	MaxResults      *int64          `json:"MaxResults"`
	NextToken       *string         `json:"NextToken"`
	ObjectReference ObjectReference `json:"ObjectReference"`
}
