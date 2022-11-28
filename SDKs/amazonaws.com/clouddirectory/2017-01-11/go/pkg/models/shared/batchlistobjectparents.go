package shared

// BatchListObjectParents
// Lists parent objects that are associated with a given object in pagination fashion.
type BatchListObjectParents struct {
	MaxResults      *int64          `json:"MaxResults,omitempty"`
	NextToken       *string         `json:"NextToken,omitempty"`
	ObjectReference ObjectReference `json:"ObjectReference"`
}
