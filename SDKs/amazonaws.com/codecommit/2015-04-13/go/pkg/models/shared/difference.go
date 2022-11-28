package shared

// Difference
// Returns information about a set of differences for a commit specifier.
type Difference struct {
	AfterBlob  *BlobMetadata       `json:"afterBlob,omitempty"`
	BeforeBlob *BlobMetadata       `json:"beforeBlob,omitempty"`
	ChangeType *ChangeTypeEnumEnum `json:"changeType,omitempty"`
}
