package shared

// PartListElement
// A list of the part sizes of the multipart upload.
type PartListElement struct {
	RangeInBytes   *string `json:"RangeInBytes,omitempty"`
	Sha256TreeHash *string `json:"SHA256TreeHash,omitempty"`
}
